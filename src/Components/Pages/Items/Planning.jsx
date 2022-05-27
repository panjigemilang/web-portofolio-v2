import React from "react"

export default function Planning() {
  const [headerActive, setHeaderActive] = React.useState(null)
  const [showCaption, setShowCaption] = React.useState([
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
  ])

  const toggleCaption = (idx) => {
    let temp = [...showCaption]

    temp[idx].show = !temp[idx].show
    setHeaderActive(idx)
    setShowCaption(temp)
  }

  React.useEffect(() => {
    const active = showCaption.filter((caption) => caption.show === true)

    if (active.length < 1) setHeaderActive(null)
  }, [showCaption])

  return (
    <div className="planning text-content">
      <p>
        &emsp;Di bagian ini saya akan menguraikan kriteria pasangan, komitmen,
        <i> planning</i>, dan harapan saya setelah menikah nanti.
      </p>
      <div className="content">
        <ul onClick={() => toggleCaption(0)}>
          <li className="title">
            <h3 className={headerActive === 0 && "active"}>
              <strong>Kriteria Pasangan</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[0].show ? "show" : "hide"
          }`}
        >
          <div className="tags">
            <span className="tag">Rambut panjang dan lurus</span>
            <span className="tag">Tidak terlalu gemuk</span>
            <span className="tag">Kulit putih (lebih dari saya)</span>
            <span className="tag">Pandai komunikasi</span>
            <span className="tag">Pandai mengatur keuangan</span>
            <span className="tag">Pandai bersyukur</span>
            <span className="tag">Penyayang</span>
            <span className="tag">Pecinta kucing</span>
            <span className="tag">
              Romantis manja <span className="love">❤❤</span>
            </span>
            <span className="tag">Murah senyum</span>
            <span className="tag">Saling terbuka</span>
          </div>
        </div>
        <ul onClick={() => toggleCaption(1)}>
          <li className="title">
            <h3 className={headerActive === 1 && "active"}>
              <strong>Komitmen</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[1].show ? "show" : "hide"
          }`}
        >
          <p>
            Berikut beberapa komitmen yang saya harapkan dapat saya dan pasangan
            saya lakukan bersama:
          </p>
          <ol>
            <li>
              &ensp;Siap saling mendengarkan dan menyelesaikan masalah bersama
            </li>
            <li>
              &ensp;Tidak memendam perasaan dan mau membicarakan baik-baik
            </li>
            <li>&ensp;Tidak mudah terbawa emosi, lebih baik diam sebentar</li>
            <li>&ensp;Tidak boleh egois</li>
            <li>&ensp;Saling membantu dalam kegiatan rumah tangga</li>
            <li>&ensp;Siap diajak jalan-jalan</li>
            <li>&ensp;Tunggu update selanjutnya...</li>
          </ol>
        </div>
        <ul onClick={() => toggleCaption(2)}>
          <li className="title">
            <h3 className={headerActive === 2 && "active"}>
              <strong>
                <i>Planning </i>& Harapan setelah Menikah
              </strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[2].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Rencana serta harapan saya kedepannya adalah semoga saya dan
            pasangan saya dapat membangun rumah tangga yang sakinah, mawaddah,
            dan warahmah dengan ikhtiar sesuai komitmen yang kita sepakati
            bersama. Tidak memendam unek-unek seorang diri, dapat dibicarakan
            bersama dan saling introspeksi pasangan.
          </p>
          <p>
            &emsp;Bertengkar itu wajar tetapi paling penting tidak saling
            menyakiti melalui kata ataupun perbuatan. Semoga dengan hangatnya
            suasana rumah tangga dapat membuat betah seluruh penghuni rumah
            tersebut dan menjadi tempat kembali yang nyaman dan menjadi obat
            penghilang penatnya duniawi. InsyaAllah.
          </p>
        </div>
      </div>
    </div>
  )
}
