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
    <div className="app">
      <SectionOne />
    </div>
  )
}
