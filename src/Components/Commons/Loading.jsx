import React from "react"
import ReactAnime from "react-animejs"
import Index from "../../Context"
import "./loading.scss"

export default function Loading() {
  const {
    toggleLoading,
    setToggleLoading,
    setTransition,
    setActive,
  } = React.useContext(Index)
  const [closing, setClosing] = React.useState(false)
  const { Anime } = ReactAnime

  React.useEffect(() => {
    let time = 900

    if (window.location.pathname.includes("/portofolio")) setActive(2)
    else setActive(1)

    if (toggleLoading) {
      setClosing(!closing)
    }

    const timeoutId = setTimeout(() => {
      setTransition(false)
      setToggleLoading(!toggleLoading)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [toggleLoading])

  return (
    <>
      <Anime
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
      ></Anime>
      <div className={`block-3 ${closing ? "close" : ""}`}></div>
      <div className={`loading-container ${closing ? "close" : "show"}`}>
        <div className="container">
          <h1>Loading</h1>
        </div>
      </div>
    </>
  )
}
