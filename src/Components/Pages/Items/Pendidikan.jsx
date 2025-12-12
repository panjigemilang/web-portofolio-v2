import React from "react"
import useCurrentWitdh from "../../Utils/GetWidth"
import useTranslation from "../../Utils/useTranslation"
import SD from "../../../Assets/img/Patterns/Pendidikan/SD.png"
import SD14 from "../../../Assets/img/SD_14.jpg"
import Buring from "../../../Assets/img/buring.jpg"
import SMPN from "../../../Assets/img/smpn_228.jpg"
import SMAN from "../../../Assets/img/sman_11.jpg"
import Brawijaya from "../../../Assets/img/brawijaya.jpg"
import Index from "../../../Context"
import Arrow from "../../../Assets/img/Arrow.svg"
import ReactSmoothImage from "../../Commons/ReactSmoothImage"

export default function Pendidikan() {
  const { setModalSrc, setModalShow } = React.useContext(Index)
  const { t } = useTranslation()
  const [contentsIndex, setContentsIndex] = React.useState(0)
  const [, setDescription] = React.useState("")
  const width = useCurrentWitdh()
  const contents = [
    {
      title: "SD",
      mobileTitle: "SDN 01 Buring, Malang",
      year: "2004 - 2008",
      line: SD,
      year2: "2008 - 2010",
      galleries: [
        {
          title: "SDN 01 Buring, Malang",
          src: Buring,
          alt: "SDN_1_buring",
        },
        {
          title: "SDN 14 Pagi, Sumurbatu",
          src: SD14,
          alt: "SDN_14_Pagi",
        },
      ],
    },
    {
      title: "SMP",
      mobileTitle: "SMPN 228 Jakarta Pusat, Kemayoran",
      year: "2010 - 2013",
      galleries: [
        {
          title: "SMPN 228 Jakarta Pusat, Kemayoran",
          src: SMPN,
          alt: "SMPN_228_Jakpus",
        },
      ],
    },
    {
      title: "SMA",
      mobileTitle: "SMAN 11 Bandung, Kota Bandung",
      year: "2013 - 2016",
      year2: "IPA",
      galleries: [
        {
          title: "SMAN 11 Bandung, Kota Bandung",
          src: SMAN,
          alt: "SMAN_11_Bandung",
        },
      ],
    },
    {
      title: "Kuliah",
      mobileTitle: "Universitas Brawijaya, Malang",
      year: "2016 - 2020",
      year2: "S. Kom",
      galleries: [
        {
          title: "Universitas Brawijaya, Malang",
          src: Brawijaya,
          alt: "Brawijaya",
        },
      ],
    },
  ]
  const [galIndex, setGalIndex] = React.useState(
    new Array(contents.length).fill({ show: 0 })
  )

  const handleGallery = (idx, type) => {
    const temp = [...galIndex]

    if (type === "next") {
      temp[idx].show += 1
    } else {
      temp[idx].show -= 1
    }

    return setGalIndex(temp)
  }

  React.useEffect(() => {
    let temp = [...galIndex]

    temp = temp.map((p) => ({
      ...p,
      show: 0,
    }))

    setGalIndex(temp)
  }, [])

  return (
    <div className="pendidikan h-100 relative">
      {contentsIndex !== contents.length - 1 && (
        <div className="read-more">
          <p className="text-center">{t("education.seeMore")}</p>
          <img
            onClick={() => setContentsIndex(contentsIndex + 1)}
            src={Arrow}
            alt="arrow.svg"
            className="arrow"
          />
        </div>
      )}
      {contentsIndex !== 0 && (
        <div className="read-more go-back">
          <p className="text-center">{t("education.back")}</p>
          <img
            onClick={() => setContentsIndex(contentsIndex - 1)}
            src={Arrow}
            alt="arrow.svg"
            className="arrow"
          />
        </div>
      )}
      {contents.map(
        (content, i) =>
          contentsIndex === i && (
            <div
              className={`row h-100 ${contentsIndex === i ? "show" : "hide"}`}
              key={content.title}
            >
              <div className={`col-sm-6 col-12 ${i % 2 !== 0 && "order-last"}`}>
                <div className="left-side">
                  <h1 className="title">{content.title}</h1>
                  {width < 768 && (
                    <p className="mobile-title">{content.mobileTitle}</p>
                  )}
                  <p className="year">{content.year}</p>
                  {content.line && (
                    <div className="line">
                      <img src={content.line} alt="pattern_sd" />
                    </div>
                  )}
                  {content.year2 && <p className="year">{content.year2}</p>}
                </div>
                <p className="caption">{t("education.gallery")}</p>
              </div>
              {width > 768 && (
                <div
                  className={`col-sm-6 col-12 ${i % 2 !== 0 && "order-first"}`}
                >
                  {content.galleries.map(
                    (gallery, idx) =>
                      galIndex[i].show === idx && (
                        <div
                          className="gallery"
                          key={`${gallery.title}-${idx}`}
                        >
                          {galIndex[i].show !== 0 && (
                            <button
                              className="next-prev prev"
                              onClick={() => handleGallery(i, "prev")}
                            >
                              <i className="fas fa-arrow-left"></i>
                            </button>
                          )}
                          <ReactSmoothImage
                            setDescription={setDescription}
                            setShow={setModalShow}
                            setSrc={setModalSrc}
                            src={gallery.src}
                            alt={gallery.alt}
                          />
                          <h3>{gallery.title}</h3>
                          {galIndex[i].show !==
                            content.galleries.length - 1 && (
                            <button
                              className="next-prev next"
                              onClick={() => handleGallery(i, "next")}
                            >
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          )}
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          )
      )}
    </div>
  )
}
