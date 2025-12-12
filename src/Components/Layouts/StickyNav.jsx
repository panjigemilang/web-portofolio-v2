import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import useDelayedUnmounting from "../Utils/useDelayComponent"
import useCurrentWidth from "../Utils/GetWidth"
import useTranslation from "../Utils/useTranslation"
import { getLocalizedPath } from "../Utils/languageRouting"

export default function StickyNav() {
  const { active, language } = React.useContext(Index)
  const { t } = useTranslation()
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500
  const width = useCurrentWidth()

  return (
    <nav
      className={`sticky-nav-app ${
        transition === "mounted" && width > 576 ? "show" : ""
      } lang-${language}`}
    >
      <ul>
        <li className={`mobile-li ${active === 1 ? "hide active" : ""}`}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/", language)}
          >
            <i className="fas fa-home"></i>
            {t("nav.home")}
          </DelayLink>
        </li>
        <li className={active === 2 ? "active" : ""}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/about", language)}
          >
            <i className="fas fa-address-card"></i>
            {t("nav.about")}
          </DelayLink>
        </li>
        <li className={active === 3 ? "active" : ""}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/experience", language)}
          >
            <i className="fas fa-user-tie"></i>
            {t("nav.experience")}
          </DelayLink>
        </li>
        <li className={active === 4 ? "active" : ""}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/gallery", language)}
          >
            <i className="far fa-images"></i>
            {t("nav.gallery")}
          </DelayLink>
        </li>
        <li className={active === 5 ? "active" : ""}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/portofolio", language)}
          >
            <i className="fas fa-file-alt"></i>
            {t("nav.portfolio")}
          </DelayLink>
        </li>
        <li className={`mobile-li ${active === 6 ? "active" : ""}`}>
          <DelayLink
            delay={delay}
            clickAction={show}
            to={getLocalizedPath("/contact", language)}
          >
            <i className="fas fa-phone"></i>
            {t("nav.contact")}
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}
