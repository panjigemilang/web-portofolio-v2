import React from "react"
import Index from "../../Context"
// import Loading from "../Commons/Loading"
import SectionOne from "./SubPages/SectionOne"
import "./landing.scss"

export default function Landing() {
  const { transition, toggleLoading, setToggleLoading } = React.useContext(
    Index
  )

  React.useEffect(() => {
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="app">
      <SectionOne />
    </div>
  )
}
