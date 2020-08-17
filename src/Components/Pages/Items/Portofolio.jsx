import React from "react"
import Index from "../../../Context"

export default function Portofolio() {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)

  React.useEffect(() => {
    setActive(4)

    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="app">
      <div className="content">
        <h1>Portofolio</h1>
      </div>
    </div>
  )
}
