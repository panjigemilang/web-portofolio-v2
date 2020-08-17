import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import "./Navbar.scss"
import Arrow from "../../Assets/img/Arrow.svg"
import useDelayedUnmounting from "../Utils/useDelayComponent"

function Navbar() {
  const { active, setToggleLoading, navShown, setNavShown } = React.useContext(
    Index
  )
  const firstRender = React.useRef(true)
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  const onClick = () => {
    setNavShown(!navShown)
    show()
  }

  React.useEffect(() => {
    console.log("Nav Shown", navShown)
  }, [navShown])

  React.useEffect(() => {
    let timeoutId,
      timeout = 300

    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (transition === "mounting") setToggleLoading(!setToggleLoading)

    if (transition === "mounted") {
      timeoutId = setTimeout(() => {
        setToggleLoading(!setToggleLoading)
      }, timeout)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [transition])

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
            <DelayLink delay={delay} clickAction={show} to="/portofolio">
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
