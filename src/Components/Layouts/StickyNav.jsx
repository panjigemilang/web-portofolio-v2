import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import useDelayedUnmounting from "../Utils/useDelayComponent"

export default function StickyNav() {
  const { active } = React.useContext(Index)
  const [transition, show] = useDelayedUnmounting(1300)
  const delay = 800

  return (
    <nav className={`sticky-nav-app ${active !== 1 ? "hide" : ""}`}>
      <ul>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/about">
            About
          </DelayLink>
        </li>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/experiences">
            Experiences
          </DelayLink>
        </li>
        <li>
          <DelayLink delay={delay} clickAction={show} to="/portofolio">
            Portofolio
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}
