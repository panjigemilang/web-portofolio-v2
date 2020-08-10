import React from "react"
import Index from "../../Context"
import Loading from "../Commons/Loading"
import SectionOne from "./SubPages/SectionOne"
import "./landing.scss"

export default function Landing() {
  const { transition, toggleLoading, setToggleLoading } = React.useContext(
    Index
  )

  React.useEffect(() => {
    const time = 300

    const timeoutId = setTimeout(() => {
      setToggleLoading(!toggleLoading)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="app">
      {transition && <Loading />}
      <SectionOne />
    </div>
  )
}
