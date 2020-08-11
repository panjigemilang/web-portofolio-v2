import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import "./Navbar.scss"
import useDelayedUnmounting from "../Utils/useDelayComponent"

function Navbar() {
  const { active, setToggleLoading } = React.useContext(Index)
  const firstRender = React.useRef(true)
  const [transition, show] = useDelayedUnmounting(1200)
  const delay = 400

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
    <nav>
      <ul>
        <li className={active === 1 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/">
            Home
          </DelayLink>
        </li>
        <li className={active === 2 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={show} to="/portofolio">
            About
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
