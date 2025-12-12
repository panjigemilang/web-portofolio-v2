import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom"
import IndexContext from "./Context"
import Landing from "./Components/Pages/Landing"
import About from "./Components/Pages/About"
import Portofolio from "./Components/Pages/Portofolio"
import Gallery from "./Components/Pages/Gallery"
import Navbar from "./Components/Layouts/Navbar"
import StickyNav from "./Components/Layouts/StickyNav"
import Loading from "./Components/Commons/Loading"
import LanguageSwitcher from "./Components/Commons/LanguageSwitcher"
import Experience from "./Components/Pages/Experience"
import NotFound from "./Components/Pages/NotFound"
import Content from "./Components/Pages/Content"
import Contact from "./Components/Pages/Contact"
import Taaruf from "./Components/Pages/Taaruf"

// Utils
import useCurrentWidth from "./Components/Utils/GetWidth"
import { parseLanguageFromPath } from "./Components/Utils/languageRouting"

// Component to handle language detection and routing
function LanguageRouter({ children }) {
  const location = useLocation()
  const { setLanguage } = React.useContext(IndexContext)

  React.useEffect(() => {
    // Parse language from URL
    const { language: urlLanguage } = parseLanguageFromPath(location.pathname)

    // Update language in context and localStorage
    setLanguage(urlLanguage)
    localStorage.setItem("language", urlLanguage)
  }, [location.pathname, setLanguage])

  return children
}

function App() {
  const [transition, setTransition] = React.useState("mounting")
  const [active, setActive] = React.useState(1)
  const [modalShow, setModalShow] = React.useState(false)
  const [modalSrc, setModalSrc] = React.useState(false)
  const [toggleLoading, setToggleLoading] = React.useState(false)
  const [navShown, setNavShown] = React.useState(false)
  const [language, setLanguage] = React.useState(() => {
    // Initialize language from URL or localStorage or default to 'en'
    if (typeof window !== "undefined") {
      const { language: urlLanguage } = parseLanguageFromPath(
        window.location.pathname
      )
      if (urlLanguage) {
        return urlLanguage
      }
    }
    const savedLanguage = localStorage.getItem("language")
    return savedLanguage && ["en", "id", "ja"].includes(savedLanguage)
      ? savedLanguage
      : "en"
  })
  const width = useCurrentWidth()
  const contextProvider = React.useMemo(
    () => ({
      active,
      setActive,
      modalShow,
      setModalShow,
      modalSrc,
      setModalSrc,
      navShown,
      setNavShown,
      toggleLoading,
      setToggleLoading,
      transition,
      setTransition,
      width,
      language,
      setLanguage,
    }),
    [
      active,
      setActive,
      modalShow,
      setModalShow,
      modalSrc,
      setModalSrc,
      navShown,
      setNavShown,
      toggleLoading,
      setToggleLoading,
      transition,
      setTransition,
      width,
      language,
      setLanguage,
    ]
  )

  return (
    <Router>
      <IndexContext.Provider value={contextProvider}>
        <LanguageRouter>
          <div className="App">
            <LanguageSwitcher />
            <Navbar />
            {width <= 576 && !window.location.pathname.includes("taaruf") && (
              <StickyNav />
            )}
            {transition !== "mounted" && <Loading />}
            <Switch>
              {/* Routes with language prefix - support en, id, ja, and jp */}
              <Route exact path="/en" component={Landing} />
              <Route exact path="/id" component={Landing} />
              <Route exact path="/ja" component={Landing} />
              <Route exact path="/jp" component={Landing} />

              <Route exact path="/en/about" component={About} />
              <Route exact path="/id/about" component={About} />
              <Route exact path="/ja/about" component={About} />
              <Route exact path="/jp/about" component={About} />

              <Route exact path="/en/experience" component={Experience} />
              <Route exact path="/id/experience" component={Experience} />
              <Route exact path="/ja/experience" component={Experience} />
              <Route exact path="/jp/experience" component={Experience} />

              <Route exact path="/en/gallery" component={Gallery} />
              <Route exact path="/id/gallery" component={Gallery} />
              <Route exact path="/ja/gallery" component={Gallery} />
              <Route exact path="/jp/gallery" component={Gallery} />

              <Route exact path="/en/portofolio" component={Portofolio} />
              <Route exact path="/id/portofolio" component={Portofolio} />
              <Route exact path="/ja/portofolio" component={Portofolio} />
              <Route exact path="/jp/portofolio" component={Portofolio} />

              <Route exact path="/en/portofolio/:title" component={Content} />
              <Route exact path="/id/portofolio/:title" component={Content} />
              <Route exact path="/ja/portofolio/:title" component={Content} />
              <Route exact path="/jp/portofolio/:title" component={Content} />

              <Route exact path="/en/contact" component={Contact} />
              <Route exact path="/id/contact" component={Contact} />
              <Route exact path="/ja/contact" component={Contact} />
              <Route exact path="/jp/contact" component={Contact} />

              <Route
                exact
                path="/en/taaruf/:date/:quarter/:year"
                component={Taaruf}
              />
              <Route
                exact
                path="/id/taaruf/:date/:quarter/:year"
                component={Taaruf}
              />
              <Route
                exact
                path="/ja/taaruf/:date/:quarter/:year"
                component={Taaruf}
              />
              <Route
                exact
                path="/jp/taaruf/:date/:quarter/:year"
                component={Taaruf}
              />

              {/* Routes without language prefix (default to English) */}
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/portofolio" component={Portofolio} />
              <Route exact path="/portofolio/:title" component={Content} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/taaruf/:date/:quarter/:year"
                component={Taaruf}
              />

              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </LanguageRouter>
      </IndexContext.Provider>
    </Router>
  )
}

export default App
