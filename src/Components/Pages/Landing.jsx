import React from "react"
import Index from "../../Context"
import SectionOne from "./SubPages/SectionOne"
import "./landing.scss"

export default function Landing() {
  const {
    setActive,
    transition,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)

  React.useEffect(() => {
    setActive(1)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="landing-app">
      <i className="particle square"></i>
      <i className="particle small-circle"></i>
      <i className="particle triangle"></i>
      <SectionOne />
      <footer>
        <small className="footer">Beta_v.1.1</small>
      </footer>
    </div>
  )
}
