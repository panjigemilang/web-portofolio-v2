import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import "./Navbar.scss"
import Arrow from "../../Assets/img/Arrow.svg"
import useDelayedUnmounting from "../Utils/useDelayComponent"

function Navbar() {
  const { active, navShown, setNavShown } = React.useContext(Index)
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  const onClick = () => {
    setNavShown(!navShown)
    show()
  }

  return (
    <>
      <nav
        className={`navbar-app ${active === 1 ? "hide" : ""}
      ${navShown ? "show" : ""}`}
      >
        <img
          src={Arrow}
          alt="arrow.svg"
          className={navShown ? "rotate" : ""}
          onClick={() => setNavShown(!navShown)}
        />
        <ul>
          <li className={active === 1 ? "active" : ""}>
            <DelayLink delay={delay} clickAction={() => onClick()} to="/">
              Home
            </DelayLink>
          </li>
          <li className={active === 2 ? "active" : ""}>
            <DelayLink delay={delay} clickAction={() => onClick()} to="/about">
              About
            </DelayLink>
          </li>
          <li className={active === 3 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to="/experience"
            >
              Experience
            </DelayLink>
          </li>
          <li className={active === 4 ? "active" : ""}>
            <DelayLink
              delay={delay}
              clickAction={() => onClick()}
              to="/portofolio"
            >
              Portofolio
            </DelayLink>
          </li>
        </ul>
      </nav>
      <div className={`overlay ${navShown ? "show" : ""}`}></div>
    </>
  )
}

export default Navbar
