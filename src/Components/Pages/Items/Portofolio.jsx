import React from "react"
import Index from "../../../Context"
import Loading from "../../Commons/Loading"

export default function Portofolio() {
  const { transition, toggleLoading, setToggleLoading } = React.useContext(
    Index
  )

  React.useEffect(() => {
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="app">
      {transition !== "mounted" && <Loading />}
      <div className="content">
        <h1>Portofolio</h1>
      </div>
    </div>
  )
}
