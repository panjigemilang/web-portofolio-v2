import React from "react"
import Index from "../../Context"
import "./notfound.scss"

export default function NotFound() {
  const { toggleLoading, setToggleLoading } = React.useContext(Index)

  React.useEffect(() => {
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div>
      <h1>Not Found ea</h1>
    </div>
  )
}
