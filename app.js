/*
 * Main component logic for index.html (the JRPG portfolio).
 *
 * The dc runtime (support.js) evaluates the page's inline <script data-dc-script>
 * with DCLogic and React supplied as function locals, and expects it to define
 * `Component`. The inline script is now just a one-line call to this factory,
 * so all real logic lives here as a regular JS file the IDE can format/lint.
 *
 * UI strings live in translations/ui/*.js, portfolio text in
 * translations/portfolio/*.js, structural data in utils/.
 */
window.createPortfolioComponent = function (DCLogic, React) {
  return class Component extends DCLogic {
    rootRef = React.createRef()
    canvasRef = React.createRef()
    aboutRef = React.createRef()
    pfTrackRef = React.createRef()

    // UI strings live in translations/ui/{en,id,ja}.js, portfolio text in translations/portfolio/{en,id,ja}.js
    ui(lang) {
      const u = window.UI_TRANSLATIONS || {}
      return u[lang || this.state.lang] || u.en || {}
    }
    bio() {
      return this.ui().bio || ""
    }

    state = {
      phase: "intro",
      lang: "en",
      wipePhase: "idle",
      typed: 0,
      introDone: false,
      gallerySel: null,
      selectedProject: null,
      imagePreview: null,
      isMobile: window.innerWidth < 768,
      canInstall: false,
    }

    mouse = { x: 0, y: 0 }
    tmouse = { x: 0, y: 0 }
    camTarget = { x: 0, y: 0, z: 60 }

    componentDidMount() {
      // PWA — register service worker
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").catch(() => {})
      }
      // PWA — install prompt
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true
      if (!isStandalone) {
        this.onBeforeInstallPrompt = (e) => {
          e.preventDefault()
          this.deferredInstallPrompt = e
          this.setState({ canInstall: true })
        }
        this.onAppInstalled = () => {
          this.deferredInstallPrompt = null
          this.setState({ canInstall: false })
        }
        window.addEventListener(
          "beforeinstallprompt",
          this.onBeforeInstallPrompt,
        )
        window.addEventListener("appinstalled", this.onAppInstalled)
      }
      const sl = this.props.startLang === "jp" ? "ja" : this.props.startLang
      if (sl && sl !== "en" && (window.UI_TRANSLATIONS || {})[sl])
        this.setState({ lang: sl })
      this.rm = !!this.props.reducedMotion
      this.onMouse = (e) => {
        const src = e.touches ? e.touches[0] : e
        this.tmouse.x = (src.clientX / window.innerWidth - 0.5) * 2
        this.tmouse.y = (src.clientY / window.innerHeight - 0.5) * 2
      }
      this.onResize = () => {
        if (!this.renderer) return
        this.cam.aspect = window.innerWidth / window.innerHeight
        this.cam.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        const m = window.innerWidth < 768
        if (m !== this.state.isMobile) this.setState({ isMobile: m })
      }
      window.addEventListener("mousemove", this.onMouse)
      window.addEventListener("touchmove", this.onMouse, { passive: true })
      window.addEventListener("resize", this.onResize)
      this.boot()
    }

    componentWillUnmount() {
      this._unmounted = true
      cancelAnimationFrame(this.raf)
      clearTimeout(this._bootT)
      clearTimeout(this._introT)
      clearInterval(this._tw)
      window.removeEventListener("mousemove", this.onMouse)
      window.removeEventListener("touchmove", this.onMouse)
      window.removeEventListener("resize", this.onResize)
      if (this.onBeforeInstallPrompt)
        window.removeEventListener(
          "beforeinstallprompt",
          this.onBeforeInstallPrompt,
        )
      if (this.onAppInstalled)
        window.removeEventListener("appinstalled", this.onAppInstalled)
      if (this.renderer) this.renderer.dispose()
    }

    boot() {
      if (!window.THREE) {
        this._bootT = setTimeout(() => this.boot(), 90)
        return
      }
      this.initThree()
      this.runIntro()
    }

    initThree() {
      const THREE = window.THREE
      const renderer = new THREE.WebGLRenderer({
        canvas: this.canvasRef.current,
        antialias: true,
      })
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, this.rm ? 1.3 : 2),
      )
      renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer = renderer
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x07070a)
      scene.fog = new THREE.FogExp2(0x0b0a07, 0.02)
      this.scene = scene
      const cam = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        220,
      )
      cam.position.set(0, 0, 60)
      this.cam = cam

      scene.add(new THREE.AmbientLight(0x4a4a55, 0.7))
      this.key = new THREE.PointLight(0xffe24d, 1.5, 140)
      this.key.position.set(10, 12, 16)
      scene.add(this.key)
      this.warm = new THREE.PointLight(0xff7a3c, 0.7, 140)
      this.warm.position.set(-16, -8, 10)
      scene.add(this.warm)
      const dir = new THREE.DirectionalLight(0xffffff, 0.4)
      dir.position.set(-6, 9, 12)
      scene.add(dir)
      this.accentCol = new THREE.Color(0xffe24d)

      const N = this.rm ? 900 : 2400
      const pos = new Float32Array(N * 3)
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 130
        pos[i * 3 + 1] = (Math.random() - 0.5) * 90
        pos[i * 3 + 2] = (Math.random() - 1) * 100 + 10
      }
      const pg = new THREE.BufferGeometry()
      pg.setAttribute("position", new THREE.BufferAttribute(pos, 3))
      this.points = new THREE.Points(
        pg,
        new THREE.PointsMaterial({
          color: 0xffe24d,
          size: 0.14,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.65,
          depthWrite: false,
        }),
      )
      scene.add(this.points)
      const N2 = this.rm ? 500 : 1200
      const pos2 = new Float32Array(N2 * 3)
      for (let i = 0; i < N2; i++) {
        pos2[i * 3] = (Math.random() - 0.5) * 140
        pos2[i * 3 + 1] = (Math.random() - 0.5) * 100
        pos2[i * 3 + 2] = (Math.random() - 1) * 110 + 10
      }
      const pg2 = new THREE.BufferGeometry()
      pg2.setAttribute("position", new THREE.BufferAttribute(pos2, 3))
      this.points2 = new THREE.Points(
        pg2,
        new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.07,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.4,
          depthWrite: false,
        }),
      )
      scene.add(this.points2)

      this.shapes = []
      const geoms = [
        new THREE.BoxGeometry(2.2, 2.2, 2.2),
        new THREE.OctahedronGeometry(1.6),
        new THREE.TorusGeometry(1.3, 0.38, 10, 24),
        new THREE.TetrahedronGeometry(1.9),
        new THREE.IcosahedronGeometry(1.5),
      ]
      const count = this.rm ? 10 : 20
      for (let i = 0; i < count; i++) {
        const g = geoms[i % geoms.length]
        const grp = new THREE.Group()
        grp.add(
          new THREE.Mesh(
            g,
            new THREE.MeshBasicMaterial({
              color: 0xffe24d,
              wireframe: true,
              transparent: true,
              opacity: 0.45,
            }),
          ),
        )
        if (i % 3 === 0) {
          const solid = new THREE.Mesh(
            g,
            new THREE.MeshStandardMaterial({
              color: 0x111116,
              emissive: 0x1c1606,
              metalness: 0.4,
              roughness: 0.5,
            }),
          )
          solid.scale.setScalar(0.9)
          grp.add(solid)
        }
        grp.position.set(
          (Math.random() - 0.5) * 54,
          (Math.random() - 0.5) * 34,
          Math.random() * -66 + 6,
        )
        grp.userData = {
          rx: (Math.random() - 0.5) * 0.5,
          ry: (Math.random() - 0.5) * 0.5,
          bob: Math.random() * 6.28,
          bs: 0.3 + Math.random() * 0.8,
          by: grp.position.y,
        }
        scene.add(grp)
        this.shapes.push(grp)
      }

      this.speed = new THREE.Group()
      for (let i = 0; i < 70; i++) {
        const len = 4 + Math.random() * 9
        const m = new THREE.Mesh(
          new THREE.BoxGeometry(0.04, 0.04, len),
          new THREE.MeshBasicMaterial({
            color: i % 4 === 0 ? 0xffffff : 0xffe24d,
            transparent: true,
            opacity: 0.7,
          }),
        )
        const a = Math.random() * 6.28,
          r = 4 + Math.random() * 22
        m.position.set(
          Math.cos(a) * r,
          Math.sin(a) * r,
          -10 - Math.random() * 55,
        )
        this.speed.add(m)
      }
      scene.add(this.speed)

      this.clock = new THREE.Clock()
      this.loop()
    }

    loop = () => {
      this.raf = requestAnimationFrame(this.loop)
      const THREE = window.THREE
      const t = this.clock.getElapsedTime()
      this.mouse.x += (this.tmouse.x - this.mouse.x) * 0.06
      this.mouse.y += (this.tmouse.y - this.mouse.y) * 0.06

      this.points.rotation.y = t * 0.018
      this.points.rotation.x = Math.sin(t * 0.1) * 0.05
      this.points2.rotation.y = -t * 0.01

      if (!this.rm)
        for (const grp of this.shapes) {
          grp.rotation.x += grp.userData.rx * 0.01
          grp.rotation.y += grp.userData.ry * 0.01
          grp.position.y =
            grp.userData.by +
            Math.sin(t * grp.userData.bs + grp.userData.bob) * 1.4
        }

      if (this.speed.visible)
        for (const l of this.speed.children) {
          l.position.z += 1.4
          if (l.position.z > 16) l.position.z = -64
        }

      const px = this.mouse.x * 2.4,
        py = -this.mouse.y * 1.6
      this.cam.position.x +=
        (this.camTarget.x + px - this.cam.position.x) * 0.05
      this.cam.position.y +=
        (this.camTarget.y + py - this.cam.position.y) * 0.05
      this.cam.position.z += (this.camTarget.z - this.cam.position.z) * 0.05
      if (!this.state.introDone && t > 2.0 && t < 2.62) {
        this.cam.position.x += (Math.random() - 0.5) * 0.3
        this.cam.position.y += (Math.random() - 0.5) * 0.3
      }
      this.cam.lookAt(this.camTarget.x * 0.25, -this.mouse.y * 0.6, 0)
      this.key.color.lerp(this.accentCol, 0.04)

      this.applyParallax()
      this.renderer.render(this.scene, this.cam)
    }

    applyParallax() {
      if (this.rm) return
      const root = this.rootRef.current
      if (!root) return
      if (!this.depthEls)
        this.depthEls = [...root.querySelectorAll("[data-depth]")]
      const mx = this.mouse.x,
        my = this.mouse.y
      for (const el of this.depthEls) {
        const d = +el.dataset.depth
        el.style.transform = `translate3d(${mx * d * -16}px, ${my * d * -16}px, 0)`
      }
    }

    runIntro() {
      this.camTarget = { x: 0, y: 0, z: 60 }
      this.speed.visible = true
      if (window.gsap)
        gsap.to(this.camTarget, { z: 12, duration: 2.55, ease: "power3.inOut" })
      else this.camTarget.z = 12

      const minTime = new Promise((resolve) => {
        this._introT = setTimeout(resolve, 2950)
      })
      const fontsReady =
        document.fonts && document.fonts.ready
          ? document.fonts.ready
          : Promise.resolve()
      const pageLoaded =
        document.readyState === "complete"
          ? Promise.resolve()
          : new Promise((resolve) =>
              window.addEventListener("load", resolve, { once: true }),
            )

      Promise.all([minTime, fontsReady, pageLoaded]).then(() => {
        if (this._unmounted) return
        this.speed.visible = false
        this.phase = "menu"
        this.setState({ phase: "menu", introDone: true })
      })
    }

    audioInit() {
      if (this.props.enableAudio === false) return
      if (this.actx) {
        if (this.actx.state === "suspended") this.actx.resume()
        return
      }
      try {
        this.actx = new (window.AudioContext || window.webkitAudioContext)()
      } catch (e) {}
    }
    blip(freq, dur, gain, type) {
      if (!this.actx) return
      const o = this.actx.createOscillator(),
        g = this.actx.createGain()
      o.type = type || "square"
      o.frequency.value = freq
      g.gain.value = gain
      o.connect(g)
      g.connect(this.actx.destination)
      const n = this.actx.currentTime
      g.gain.setValueAtTime(gain, n)
      g.gain.exponentialRampToValueAtTime(0.0001, n + dur)
      o.start(n)
      o.stop(n + dur)
    }
    hover = () => {
      this.audioInit()
      this.blip(640, 0.05, 0.03)
    }
    playSelect() {
      this.audioInit()
      this.blip(900, 0.07, 0.045)
      setTimeout(() => this.blip(1380, 0.09, 0.04), 55)
    }
    playType() {
      this.blip(2100, 0.012, 0.012)
    }

    goMenu = () => this.navigate("menu")
    navigateClick = (e) => this.navigate(e.currentTarget.dataset.target)

    navigate(target) {
      if (this.state.wipePhase !== "idle" || this.state.phase === target) return
      this.playSelect()
      if (window.gsap && this.camTarget) {
        gsap.killTweensOf(this.camTarget)
        gsap.to(this.camTarget, {
          z: this.camTarget.z - 22,
          duration: 0.42,
          ease: "power3.in",
        })
      }
      this.setState({ wipePhase: "cover" })
      setTimeout(() => {
        this.applyScene(target)
        this.phase = target
        this.setState({
          phase: target,
          gallerySel: null,
          imagePreview: null,
          wipePhase: "reveal",
        })
      }, 410)
      setTimeout(() => this.setState({ wipePhase: "idle" }), 880)
    }

    applyScene(target) {
      const T = {
        menu: { x: 0, y: 0, z: 12, a: 0xffe24d },
        about: { x: -3, y: 0.5, z: 11, a: 0xffe24d },
        portfolio: { x: 2, y: 1.2, z: 14, a: 0xffd24d },
        gallery: { x: 0, y: 0, z: 15, a: 0xfff0c0 },
        contact: { x: 0, y: -1, z: 10, a: 0xffae46 },
      }[target] || { x: 0, y: 0, z: 12, a: 0xffe24d }
      if (window.gsap) {
        gsap.killTweensOf(this.camTarget)
        gsap.to(this.camTarget, {
          x: T.x,
          y: T.y,
          z: T.z,
          duration: 1.1,
          ease: "power3.inOut",
        })
      } else this.camTarget = { x: T.x, y: T.y, z: T.z }
      if (this.accentCol) this.accentCol.setHex(T.a)
      if (target === "about") this.startType()
      if (target === "portfolio") {
        if (this.pfTrackRef.current) this.pfTrackRef.current.scrollTop = 0
        setTimeout(() => this.onPfScroll(), 60)
      }
    }

    startType() {
      clearInterval(this._tw)
      this.setState({ typed: 0 })
      const len = this.bio().length
      let n = 0
      const sp = this.props.typeSpeed || 14
      this._tw = setInterval(() => {
        n += 1
        if (n >= len) clearInterval(this._tw)
        this.setState({ typed: n })
        if (n % 3 === 0) this.playType()
      }, sp)
    }
    skipType = () => {
      clearInterval(this._tw)
      this.setState({ typed: this.bio().length })
    }

    onPfScroll = () => {
      const cont = this.pfTrackRef.current
      if (!cont) return
      if (this._pfRaf) return
      this._pfRaf = requestAnimationFrame(() => {
        this._pfRaf = null
        const cr = cont.getBoundingClientRect()
        const cy = cr.top + cr.height / 2
        cont.querySelectorAll("[data-pf]").forEach((c) => {
          const r = c.getBoundingClientRect()
          const center = r.top + r.height / 2
          const d = Math.max(
            -1.2,
            Math.min(1.2, (center - cy) / (cr.height / 2)),
          )
          const tz = -Math.abs(d) * 130
          const sc = 1 - Math.abs(d) * 0.1
          c.style.transform = `translateZ(${tz}px) rotateX(${-d * 7}deg) scale(${sc})`
          c.style.opacity = Math.max(0.25, 1 - Math.abs(d) * 0.55)
        })
      })
    }

    setLang = (e) => {
      const lang = e.currentTarget.dataset.lang
      if (!lang || lang === this.state.lang) return
      this.playSelect()
      this.setState({ lang }, () => {
        if (this.state.phase === "about") this.startType()
      })
    }
    installApp = async () => {
      this.playSelect()
      const e = this.deferredInstallPrompt
      if (!e) return
      this.deferredInstallPrompt = null
      this.setState({ canInstall: false })
      e.prompt()
      await e.userChoice
    }
    openFrame = (e) => {
      this.playSelect()
      this.setState({ gallerySel: +e.currentTarget.dataset.i })
    }
    closeFrame = () => {
      this.audioInit()
      this.blip(520, 0.06, 0.03)
      this.setState({ gallerySel: null })
    }
    openLink = (e) => {
      this.playSelect()
      const u = e.currentTarget.dataset.url
      if (u) window.open(u, "_blank", "noopener")
    }
    selectProject = (e) => {
      this.playSelect()
      this.setState({ selectedProject: e.currentTarget.dataset.pkey || null })
    }
    closeProject = () => {
      this.audioInit()
      this.blip(520, 0.06, 0.03)
      this.setState({ selectedProject: null, imagePreview: null })
    }
    openImagePreview = (e) => {
      this.playSelect()
      this.setState({
        imagePreview: {
          src: e.currentTarget.dataset.src,
          caption: e.currentTarget.dataset.caption || "",
        },
      })
    }
    closeImagePreview = () => {
      this.audioInit()
      this.blip(520, 0.06, 0.03)
      this.setState({ imagePreview: null })
    }

    renderVals() {
      const lang = this.state.lang
      const phase = this.state.phase
      const isMobile = this.state.isMobile
      const isDesktop = !isMobile

      // UI strings (translations/ui/*.js)
      const t = this.ui(lang)

      const menuTargets = ["about", "portfolio", "gallery", "contact"]
      const menuItems = (t.menuItems || []).map((m, i) => ({
        n: "0" + (i + 1),
        target: menuTargets[i],
        label: m.label,
        descLoc: m.desc,
      }))

      // Portfolio: structural data (utils/ContentVariables.js) merged with translated text (translations/portfolio/*.js)
      const ptrAll = window.PORTFOLIO_TRANSLATIONS || {}
      const ptr = ptrAll[lang] || ptrAll.en || {}
      const dataGroups = window.PORTFOLIO_DATA || []
      const groups = dataGroups.map((g) => ({
        year: g.year,
        items: g.items.map((p) => {
          const tr = ptr[p.key] || {}
          return {
            key: p.key,
            period: p.date,
            cat: p.cat,
            name: tr.title || p.key,
            role: tr.job || "",
            tech: tr.technologies || [],
            desc: tr.description || "",
          }
        }),
      }))

      // Gallery: real artworks (utils/GalleryContents.js)
      const galleryData = window.GALLERY_DATA || []
      const frames = galleryData.map((gd, i) => ({
        idx: i,
        title: gd.title,
        medium: gd.tools,
        src: gd.src,
        artStyle: {
          position: "absolute",
          inset: 0,
          background: `#0a0a0a url("${gd.src}") center/cover no-repeat`,
        },
      }))

      const contacts = [
        {
          label: "GitHub",
          sub: "panjigemilang",
          url: "https://github.com/panjigemilang",
          badge: "G",
        },
        {
          label: "LinkedIn",
          sub: "in/panji-g",
          url: "https://www.linkedin.com/in/panji-g",
          badge: "in",
        },
        {
          label: "Instagram",
          sub: "@_panjig",
          url: "https://instagram.com/_panjig",
          badge: "IG",
        },
      ]

      const aboutTags = t.aboutTags || []

      const base = {
        position: "fixed",
        inset: 0,
        zIndex: 10,
        transition: "opacity .6s ease, transform .85s cubic-bezier(.16,1,.3,1)",
      }
      const vis = (on, off) =>
        on
          ? {
              ...base,
              opacity: 1,
              visibility: "visible",
              pointerEvents: "auto",
              transform: "none",
            }
          : {
              ...base,
              opacity: 0,
              visibility: "hidden",
              pointerEvents: "none",
              transform: off || "scale(1.04)",
            }

      const sel = this.state.gallerySel
      const selFrame =
        sel != null
          ? Object.assign({}, frames[sel], {
              details: [
                { label: t.galReference, value: galleryData[sel].reference },
                { label: t.galWorkTime, value: galleryData[sel].workTime },
                { label: t.galTools, value: galleryData[sel].tools },
              ].filter((d) => d.value),
            })
          : { title: "", medium: "", src: "", details: [] }

      // Selected project: merge structural item with its translation for the detail overlay
      const selKey = this.state.selectedProject
      let selProject = {
        key: "",
        name: "",
        period: "",
        cat: "",
        role: "",
        tech: [],
        desc: "",
        blocks: [],
        images: [],
        hasImages: false,
        outro: null,
        link: null,
      }
      if (selKey) {
        let src = null
        dataGroups.forEach((g) =>
          g.items.forEach((it) => {
            if (it.key === selKey) src = it
          }),
        )
        if (src) {
          const tr = ptr[selKey] || {}
          const caps = tr.imageCaptions || {}
          const images = (src.images || []).map((im) => ({
            src: im.src,
            caption: (im.captionKey && caps[im.captionKey]) || "",
          }))
          const descs = [
            tr.descriptionOne,
            tr.descriptionTwo,
            tr.descriptionThree,
            tr.descriptionFour,
            tr.descriptionFive,
          ].filter((s) => s && s.trim())
          const fns = (tr.functions || []).filter((s) => s && s.trim())
          // Paragraphs ending with a colon introduce the feature list; otherwise it follows the first paragraph
          const blocks = []
          let fnsPlaced = !fns.length
          descs.forEach((d) => {
            blocks.push({ p: d })
            if (!fnsPlaced && /[:：]\s*$/.test(d.trim())) {
              blocks.push({ list: fns })
              fnsPlaced = true
            }
          })
          if (!fnsPlaced)
            blocks.splice(Math.min(1, blocks.length), 0, { list: fns })
          selProject = {
            key: selKey,
            period: src.date,
            cat: src.cat,
            name: tr.title || selKey,
            role: tr.job || "",
            tech: tr.technologies || [],
            desc: tr.description || "",
            blocks,
            images,
            hasImages: images.length > 0,
            outro: tr.outro && tr.outro.trim() ? tr.outro : null,
            link: src.link && src.link.trim() ? src.link : null,
          }
        }
      }

      // ---- MOBILE-RESPONSIVE STYLES ----

      // Chrome — single full-width flex bar
      const chromeBarStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "10px 12px" : "18px 34px",
        opacity: phase === "intro" ? 0 : 1,
        transition: "opacity .6s ease",
        pointerEvents: "none",
      }
      const chromeLeftStyle = {
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "8px" : "14px",
        pointerEvents: "auto",
      }
      const chromeBadgeStyle = {
        cursor: "pointer",
        width: isMobile ? "36px" : "46px",
        height: isMobile ? "36px" : "46px",
        display: "grid",
        placeItems: "center",
        background: "#ffe24d",
        color: "#0a0a0a",
        fontFamily: "'Anton'",
        fontSize: isMobile ? "16px" : "22px",
        transform: "skewX(-7deg)",
        boxShadow: "0 6px 22px rgba(255,226,77,.35)",
      }
      const chromeNameStyle = {
        transform: "skewX(-7deg)",
        display: isMobile ? "none" : "block",
      }

      // Chrome right
      const chromeRightStyle = {
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "6px" : "16px",
        pointerEvents: "auto",
      }
      const installButtonStyle = {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: isMobile ? "7px 10px" : "10px 16px",
        background: "#ffe24d",
        color: "#0a0a0a",
        transform: "skewX(-7deg)",
        fontFamily: "'Anton'",
        fontSize: isMobile ? "11px" : "13px",
        letterSpacing: ".04em",
        boxShadow: "0 6px 18px rgba(255,226,77,.3)",
      }
      const backInnerStyle = {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        padding: isMobile ? "7px 10px" : "11px 18px",
        border: "1.5px solid rgba(255,255,255,.25)",
        transform: "skewX(-7deg)",
        background: "rgba(10,10,12,.5)",
        backdropFilter: "blur(6px)",
      }
      const projectOpenLocal = !!this.state.selectedProject
      const backAction = projectOpenLocal ? this.closeProject : this.goMenu
      const backMenuText = projectOpenLocal
        ? isMobile
          ? ""
          : t.back
        : isMobile
          ? ""
          : t.menu

      // Menu
      const menuDeco1Style = {
        position: "absolute",
        top: "12%",
        right: "9%",
        display: isMobile ? "none" : "block",
      }
      const menuKanjiStyle = {
        position: "absolute",
        top: "22%",
        right: "30%",
        display: isMobile ? "none" : "block",
      }
      const menuContainerStyle = {
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: isMobile ? "5vw" : "8vw",
        paddingRight: isMobile ? "5vw" : "4vw",
      }
      const menuTitleStyle = {
        fontFamily: "'Anton'",
        fontSize: isMobile ? "clamp(28px,8vw,48px)" : "clamp(34px,5vw,64px)",
        transform: "skewX(-7deg)",
        lineHeight: 0.9,
        marginBottom: isMobile ? "20px" : "38px",
      }
      const menuItemsListStyle = {
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "10px" : "14px",
        maxWidth: "560px",
      }
      const menuItemBaseStyle = {
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "12px" : "18px",
        padding: isMobile ? "12px 16px" : "16px 24px",
        transform: "skewX(-7deg)",
        background: "rgba(13,13,16,.55)",
        borderLeft: "4px solid #ffe24d",
        backdropFilter: "blur(4px)",
        transition:
          "transform .35s cubic-bezier(.16,1,.3,1),background .4s ease,padding-left .35s,box-shadow .4s ease",
      }
      const menuNumStyle = {
        fontFamily: "'Anton'",
        fontSize: isMobile ? "clamp(18px,5vw,26px)" : "30px",
        opacity: 0.55,
        minWidth: isMobile ? "30px" : "46px",
        flexShrink: 0,
      }
      const menuLabelStyle = {
        fontFamily: "'Anton'",
        fontSize: isMobile ? "clamp(20px,6vw,30px)" : "32px",
        lineHeight: 1,
        letterSpacing: ".02em",
      }

      // About
      const aboutGridStyle = {
        position: "relative",
        height: "100%",
        display: isMobile ? "flex" : "grid",
        flexDirection: isMobile ? "column" : undefined,
        gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "16px" : "30px",
        padding: isMobile ? "62px 5vw 0" : "0 7vw",
        maxWidth: "1500px",
        margin: "0 auto",
        overflowY: isMobile ? "auto" : "visible",
      }
      const aboutPortraitColStyle = {
        position: "relative",
        height: isMobile ? "240px" : "74vh",
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        width: isMobile ? "100%" : undefined,
      }
      const aboutGlowStyle = {
        position: "absolute",
        inset: 0,
        width: isMobile ? "200px" : "380px",
        height: isMobile ? "200px" : "380px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,226,77,.4), transparent 65%)",
        filter: "blur(20px)",
      }
      const aboutFrameStyle = {
        width: isMobile ? "170px" : "340px",
        height: isMobile ? "215px" : "430px",
        border: "2px solid rgba(255,226,77,.5)",
        transform: "rotate(-6deg)",
      }
      const aboutKanjiStyle = {
        fontFamily: "'Shippori Mincho'",
        fontSize: isMobile ? "150px" : "300px",
        color: "rgba(255,255,255,.04)",
      }
      const aboutCardStyle = {
        width: isMobile ? "160px" : "320px",
        height: isMobile ? "205px" : "420px",
        background: "linear-gradient(160deg,#16161c,#0c0c10)",
        border: "3px solid #0a0a0a",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,226,77,.25)",
        overflow: "hidden",
        position: "relative",
      }
      const aboutTextColStyle = { minWidth: 0, width: "100%" }
      const aboutBioBoxStyle = {
        cursor: "pointer",
        position: "relative",
        background: "rgba(13,13,16,.6)",
        border: "1.5px solid rgba(255,226,77,.3)",
        borderLeft: "4px solid #ffe24d",
        padding: isMobile ? "20px 18px" : "24px 28px",
        maxWidth: "560px",
        minHeight: isMobile ? "160px" : "310px",
        backdropFilter: "blur(6px)",
        boxShadow: "0 24px 60px rgba(0,0,0,.5)",
      }

      // Portfolio
      const pfTopStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        padding: isMobile ? "62px 5vw 0" : "96px 7vw 0",
        pointerEvents: "none",
      }
      const pfTrackStyle = {
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        overflowX: "hidden",
        padding: isMobile ? "150px 5vw 80px" : "230px 7vw 180px",
        perspective: "1400px",
      }
      const yearStyle = {
        position: "sticky",
        top: 0,
        fontFamily: "'Anton'",
        fontSize: isMobile
          ? "clamp(48px,13vw,110px)"
          : "clamp(80px,16vw,190px)",
        lineHeight: 0.8,
        color: "rgba(255,226,77,.08)",
        transform: "skewX(-7deg)",
        pointerEvents: "none",
        zIndex: 0,
      }

      // Portfolio detail
      const pfDetailStickyStyle = {
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "12px 5vw" : "22px 7vw",
        background: "rgba(9,9,13,.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,226,77,.2)",
        minHeight: isMobile ? "52px" : "70px",
      }
      const pfDetailSubtitleStyle = {
        fontFamily: "'Shippori Mincho'",
        fontSize: isMobile ? "10px" : "11px",
        letterSpacing: ".4em",
        color: "rgba(255,255,255,.35)",
        textTransform: "uppercase",
      }
      const pfDetailBackStyle = {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "'Anton'",
        fontSize: "12px",
        letterSpacing: ".2em",
        color: "#ffe24d",
        padding: isMobile ? "7px 12px" : "10px 20px",
        border: "1.5px solid #ffe24d",
        transform: "skewX(-7deg)",
        transition: "background .25s,color .25s",
        flexShrink: 0,
      }
      const pfDetailBodyStyle = {
        maxWidth: "880px",
        margin: "0 auto",
        padding: isMobile ? "28px 5vw 80px" : "56px 7vw 120px",
      }

      // Gallery
      const galTopStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        padding: isMobile ? "62px 5vw 0" : "92px 7vw 0",
        pointerEvents: "none",
        textAlign: "center",
      }
      const galleryScrollStyle = {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        overflowX: "auto",
        overflowY: "hidden",
        padding: isMobile ? "0 5vw" : "0 8vw",
        gap: isMobile ? "24px" : "48px",
        perspective: "1600px",
        scrollBehavior: "smooth",
      }
      const galleryCardSizeStyle = {
        position: "relative",
        width: isMobile ? "200px" : "300px",
        height: isMobile ? "260px" : "380px",
        background: "#0a0a0a",
        border: isMobile ? "10px solid #15151a" : "14px solid #15151a",
        boxShadow:
          "0 40px 70px rgba(0,0,0,.7),inset 0 0 0 2px rgba(255,226,77,.3)",
      }
      // Viewer frame wraps the image at its natural aspect ratio
      const galleryViewerCardStyle = {
        position: "relative",
        background: "#0a0a0a",
        lineHeight: 0,
        border: isMobile ? "10px solid #15151a" : "18px solid #15151a",
        boxShadow:
          "0 60px 120px rgba(0,0,0,.8),inset 0 0 0 2px rgba(255,226,77,.35)",
      }
      const galleryViewerImgStyle = {
        display: "block",
        width: "auto",
        height: "auto",
        maxWidth: isMobile ? "84vw" : "min(78vw, 960px)",
        maxHeight: isMobile ? "52vh" : "62vh",
      }

      // Contact
      const contactTopStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 6,
        padding: isMobile ? "62px 5vw 0" : "92px 7vw 0",
        pointerEvents: "none",
      }

      return {
        t,
        phase,
        isMobile,
        isDesktop,
        menuItems,
        groups,
        frames,
        contacts,
        aboutTags,
        bioShown: this.bio().slice(0, this.state.typed),
        canInstall: this.state.canInstall,

        rootRef: this.rootRef,
        canvasRef: this.canvasRef,
        aboutRef: this.aboutRef,
        pfTrackRef: this.pfTrackRef,
        hover: this.hover,
        goMenu: this.goMenu,
        navigateClick: this.navigateClick,
        setLang: this.setLang,
        skipType: this.skipType,
        onPfScroll: this.onPfScroll,
        openFrame: this.openFrame,
        closeFrame: this.closeFrame,
        openLink: this.openLink,
        selectProject: this.selectProject,
        closeProject: this.closeProject,
        installApp: this.installApp,

        // Chrome
        chromeBarStyle,
        chromeLeftStyle,
        chromeBadgeStyle,
        chromeNameStyle,
        chromeRightStyle,
        backInnerStyle,
        backMenuText,
        backAction,
        installButtonStyle,

        // Menu
        menuDeco1Style,
        menuKanjiStyle,
        menuContainerStyle,
        menuTitleStyle,
        menuItemsListStyle,
        menuItemBaseStyle,
        menuNumStyle,
        menuLabelStyle,

        // About
        aboutGridStyle,
        aboutPortraitColStyle,
        aboutGlowStyle,
        aboutFrameStyle,
        aboutKanjiStyle,
        aboutCardStyle,
        aboutTextColStyle,
        aboutBioBoxStyle,

        // Portfolio
        pfTopStyle,
        pfTrackStyle,
        yearStyle,
        pfDetailStickyStyle,
        pfDetailSubtitleStyle,
        pfDetailBackStyle,
        pfDetailBodyStyle,

        // Gallery
        galTopStyle,
        galleryScrollStyle,
        galleryCardSizeStyle,
        galleryViewerCardStyle,
        galleryViewerImgStyle,

        // Contact
        contactTopStyle,

        backStyle: {
          opacity: phase === "menu" || phase === "intro" ? 0 : 1,
          pointerEvents:
            phase === "menu" || phase === "intro" ? "none" : "auto",
          transition: "opacity .4s ease",
        },
        enTabStyle: {
          padding: isMobile ? "8px 8px" : "10px 12px",
          background: lang === "en" ? "#ffe24d" : "transparent",
          color: lang === "en" ? "#0a0a0a" : "#fff",
          transition: "all .3s",
        },
        idTabStyle: {
          padding: isMobile ? "8px 8px" : "10px 12px",
          background: lang === "id" ? "#ffe24d" : "transparent",
          color: lang === "id" ? "#0a0a0a" : "#fff",
          transition: "all .3s",
        },
        jaTabStyle: {
          padding: isMobile ? "8px 8px" : "10px 12px",
          background: lang === "ja" ? "#ffe24d" : "transparent",
          color: lang === "ja" ? "#0a0a0a" : "#fff",
          fontFamily: "'Shippori Mincho', serif",
          transition: "all .3s",
        },

        introStyle: {
          position: "fixed",
          inset: 0,
          zIndex: 30,
          display: "grid",
          placeItems: "center",
          background: "rgba(7,7,10,.35)",
          opacity: phase === "intro" ? 1 : 0,
          visibility: phase === "intro" ? "visible" : "hidden",
          pointerEvents: "none",
          transition: "opacity .7s ease",
        },
        menuStyle: vis(phase === "menu", "translateX(-40px)"),
        aboutStyle: vis(phase === "about", "translateX(50px)"),
        portfolioStyle: vis(phase === "portfolio", "translateY(50px)"),
        galleryStyle: vis(phase === "gallery", "scale(1.06)"),
        contactStyle: vis(phase === "contact", "translateY(-50px)"),

        viewerOpen: sel != null,
        projectOpen: !!this.state.selectedProject,
        selProject,
        selFrame,

        // Image preview lightbox
        imagePreviewOpen: !!this.state.imagePreview,
        previewImage: this.state.imagePreview || { src: "", caption: "" },
        openImagePreview: this.openImagePreview,
        closeImagePreview: this.closeImagePreview,
        previewImgStyle: {
          display: "block",
          width: "auto",
          height: "auto",
          maxWidth: isMobile ? "92vw" : "min(90vw, 1200px)",
          maxHeight: isMobile ? "70vh" : "78vh",
          border: "2px solid rgba(255,226,77,.4)",
          boxShadow: "0 60px 120px rgba(0,0,0,.85)",
        },

        wipeStyle: (() => {
          const w = this.state.wipePhase
          const b = {
            position: "absolute",
            top: 0,
            left: "-20vw",
            width: "140vw",
            height: "100%",
            background: "#ffe24d",
            display: "block",
          }
          if (w === "idle")
            return {
              ...b,
              transform: "translateX(-150%) skewX(-10deg)",
              transition: "none",
            }
          if (w === "cover")
            return {
              ...b,
              transform: "translateX(0) skewX(-10deg)",
              transition: "transform .4s cubic-bezier(.7,0,.2,1)",
            }
          return {
            ...b,
            transform: "translateX(150%) skewX(-10deg)",
            transition: "transform .45s cubic-bezier(.7,0,.2,1)",
          }
        })(),
      }
    }
  }
}
