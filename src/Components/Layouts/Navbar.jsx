import React from "react"
import Index from "../../Context"
import DelayLink from "react-delay-link"
import "./Navbar.scss"

function Navbar() {
  const {
    active,
    transition,
    setTransition,
    setToggleLoading,
  } = React.useContext(Index)
  const delay = 0

  React.useEffect(() => {
    if (transition) setToggleLoading(!setToggleLoading)
  }, [transition])

  const handleClick = (e) => {
    setTransition(!transition)
  }

  return (
    <nav>
      <ul>
        <li className={active === 1 ? "active" : ""}>
          <DelayLink delay={delay} clickAction={(e) => handleClick(e)} to="/">
            Home
          </DelayLink>
        </li>
        <li className={active === 2 ? "active" : ""}>
          <DelayLink
            delay={delay}
            clickAction={(e) => handleClick(e)}
            to="/portofolio"
          >
            About
          </DelayLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
