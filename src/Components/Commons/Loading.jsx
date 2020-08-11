import React from "react"
import ReactAnime from "react-animejs"
import Index from "../../Context"
import "./loading.scss"

export default function Loading() {
  const {
    toggleLoading,
    setToggleLoading,
    transition,
    setActive,
  } = React.useContext(Index)
  const [closing, setClosing] = React.useState(false)
  const firstRender = React.useRef(true)
  const { Anime } = ReactAnime

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (window.location.pathname.includes("/portofolio")) setActive(2)
    else setActive(1)

    if (toggleLoading) {
      setClosing(!closing)
    }

    if (transition === "mounted" || transition === "unmounted") {
      setToggleLoading(!toggleLoading)
    }
  }, [toggleLoading])

  return (
    <>
      {/* <Anime
        className="block-1"
        type="div"
        initial={[
          {
            targets: ".block-1",
            keyframes: [
              {
                translateX: "120vw",
                width: "20vw",
              },
              {
                translateX: "130vw",
                width: "1vw",
              },
            ],
            duration: 500,
            easing: "linear",
          },
        ]}
      ></Anime>
      <Anime
        className="block-2"
        type="div"
        initial={[
          {
            targets: ".block-2",
            keyframes: [
              {
                translateX: "120vw",
                width: "20vw",
              },
              {
                translateX: "130vw",
                width: "1vw",
              },
            ],
            delay: 50,
            duration: 500,
            easing: "linear",
          },
        ]}
      ></Anime> */}
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
    </>
  )
}
