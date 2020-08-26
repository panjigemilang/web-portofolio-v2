import React from "react"
import Index from "../../Context"
import "./notfound.scss"

export default function NotFound() {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)

  React.useEffect(() => {
    setActive(99)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="not-found-app">
      <h1>Not Found ea</h1>
    </div>
  )
}
