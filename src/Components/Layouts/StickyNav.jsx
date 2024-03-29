import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import useDelayedUnmounting from "../Utils/useDelayComponent"
import useCurrentWidth from "../Utils/GetWidth"

export default function StickyNav() {
  const { active } = React.useContext(Index)
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500
  const width = useCurrentWidth()

  return (
    <nav
      className={`sticky-nav-app ${
        transition === "mounted" && width > 576 ? "show" : ""
      }`}
    >
      <ul>
        <li className={`mobile-li ${active === 1 ? "hide active" : ""}`}>
          <DelayLink delay={delay} clickAction={show} to="/">
            <i className="fas fa-home"></i>
            Home
          </DelayLink>
        </li>
        <li className={active === 2 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/about">
            <i className="fas fa-address-card"></i>
            About
          </DelayLink>
        </li>
        <li className={active === 3 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/experience">
            <i className="fas fa-user-tie"></i>
            Experiences
          </DelayLink>
        </li>
        <li className={active === 4 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/gallery">
            <i className="far fa-images"></i>
            Gallery
          </DelayLink>
        </li>
        <li className={active === 5 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/portofolio">
            <i className="fas fa-file-alt"></i>
            Portofolio
          </DelayLink>
        </li>
        <li className={`mobile-li ${active === 6 ? "active" : ""}`}>
          <DelayLink delay={delay} clickAction={show} to="/contact">
            <i className="fas fa-phone"></i>
            Contact
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}
