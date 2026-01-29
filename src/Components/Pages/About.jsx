import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import PP from "../../Assets/img/About.jpeg"
import "./about.scss"

export default function About() {
  const { navShown, setActive, toggleLoading, setToggleLoading } =
    React.useContext(Index)
  const { t } = useTranslation()
  const [swipe, setSwipe] = React.useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(2)
    setToggleLoading(!toggleLoading)

    document.getElementsByTagName("body")[0].style.overflow = "hidden auto"
  }, [])

  return (
    <div className={`about-app ${navShown ? "blur" : ""}`}>
      <div className={`about ${swipe ? "hide" : ""}`}>
        <div className="block"></div>
        <div className="block-2"></div>
        <div className="content">
          <h1>{t("about.hero.title")}</h1>
          <hr />
          <p>{t("about.hero.description")}</p>
          <div className="button-box">
            <button onClick={() => setSwipe(!swipe)}>
              {t("about.hero.button")}
            </button>
          </div>
        </div>
      </div>
      <div className={`about-right ${swipe ? "show" : ""}`} id="about-right">
        <div className="city"></div>
        <div className="block"></div>
        <div className={`content container ${swipe ? "show" : ""}`}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="img-box">
                <img src={PP} alt="profile_picture.jpg" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="description">
                <h3>{t("about.profile.greeting")}</h3>
                <p>{t("about.profile.roles")}</p>
                <p>{t("about.profile.description1")}</p>
                <p>{t("about.profile.description2")}</p>
                <p>{t("about.profile.description3")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <a
                href="https://www.docdroid.net/eWB4HN2/cv-panji-gemilang-dec-2020-pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="items"
              >
                <div className="circle cv"></div>
                <p>&emsp;CV</p>
              </a>
              <a
                href="https://www.linkedin.com/in/panji-g/"
                target="_blank"
                rel="noopener noreferrer"
                className="items"
              >
                <div className="circle linkedin"></div>
                <p>&emsp;Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
