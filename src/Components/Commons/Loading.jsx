import React from "react"
import Index from "../../Context"
import "./loading.scss"

export default function Loading() {
  const { toggleLoading, setToggleLoading, transition } = React.useContext(
    Index
  )
  const [closing, setClosing] = React.useState(false)
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    if (firstRender.current) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden auto"

      firstRender.current = false
      setToggleLoading(!toggleLoading)
      return
    }

    if (toggleLoading) {
      setClosing(!closing)
    }
  }, [toggleLoading, transition])

  return (
    <div className="loading-app">
      <div
        className={`block-1 ${transition === "mounting" ? "show" : ""}`}
      ></div>
      <div
        className={`block-2 ${transition === "mounting" ? "show" : ""}`}
      ></div>
      <div className={`block-3 ${closing ? "close" : ""}`}></div>
      <div className={`loading-container ${closing ? "close" : "show"}`}>
        <div className="container">
          <h1>Loading</h1>
        </div>
      </div>
    </div>
  )
}
