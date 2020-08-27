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
        <li className={`mobile-li ${active === 1 ? "hide" : ""}`}>
          <DelayLink delay={delay} clickAction={show} to="/">
            <i className="fas fa-home"></i>
            Home
          </DelayLink>
        </li>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/about">
            <i className="fas fa-address-card"></i>
            About
          </DelayLink>
        </li>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/experience">
            <i className="fas fa-user-tie"></i>
            Experiences
          </DelayLink>
        </li>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/portofolio">
            <i className="fas fa-file-alt"></i>
            Portofolio
          </DelayLink>
        </li>
        <li className="mobile-li">
          <DelayLink delay={delay} clickAction={show} to="/contact">
            <i className="fas fa-phone"></i>
            Contact
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}
