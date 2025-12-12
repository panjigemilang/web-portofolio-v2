import React from "react"
import { withRouter } from "react-router-dom"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import Arrow from "../../Assets/img/Arrow.svg"
import useDelayedUnmounting from "../Utils/useDelayComponent"
import useTranslation from "../Utils/useTranslation"
import { getLocalizedPath } from "../Utils/languageRouting"
import "./Navbar.scss"

function Navbar({ history }) {
  const { active, navShown, setNavShown, setToggleLoading, language } =
    React.useContext(Index)
  const { t } = useTranslation()
  const [locationKeys, setLocationKeys] = React.useState([])
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  React.useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key])
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
        }

        setToggleLoading(true)
      }
    })
  }, [locationKeys])

  const onClick = () => {
    setNavShown(!navShown)
    show()
  }

  return (
    <>
      <nav
        className={`navbar-app ${active === 1 || active === 0 ? "hide" : ""}
      ${navShown ? "show" : ""} lang-${language}`}
      >
        <img
          src={Arrow}
          alt="arrow.svg"
          className={navShown ? "rotate" : ""}
          onClick={() => setNavShown(!navShown)}
        />
        <ul>
          <li className={active === 1 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/", language)}
            >
              {t("nav.home")}
            </DelayLink>
          </li>
          <li className={active === 2 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/about", language)}
            >
              {t("nav.about")}
            </DelayLink>
          </li>
          <li className={active === 3 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/experience", language)}
            >
              {t("nav.experience")}
            </DelayLink>
          </li>
          <li className={active === 4 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/gallery", language)}
            >
              {t("nav.gallery")}
            </DelayLink>
          </li>
          <li className={active === 5 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/portofolio", language)}
            >
              {t("nav.portfolio")}
            </DelayLink>
          </li>
          <li className={active === 6 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to={getLocalizedPath("/contact", language)}
            >
              {t("nav.contact")}
            </DelayLink>
          </li>
        </ul>
      </nav>
      <div className={`overlay ${navShown ? "show" : ""}`}></div>
    </>
  )
}

export default withRouter(Navbar)
