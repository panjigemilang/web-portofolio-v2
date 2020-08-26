import React from "react"
import Index from "../../Context"
import SectionOne from "./SubPages/SectionOne"
import "./landing.scss"

export default function Landing() {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)

  React.useEffect(() => {
    setActive(1)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="landing-app">
      <span className="particle square"></span>
      <span className="particle circle-outer"></span>
      <span className="particle small-circle"></span>
      <span className="particle triangle"></span>
      <SectionOne />
      <footer>
        <small className="footer">Beta_v.1.2</small>
      </footer>
    </div>
  )
}
