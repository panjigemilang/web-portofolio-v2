import React from "react"
import ReactAnime from "react-animejs"
import Index from "../../Context"
import "./loading.scss"

// export default class Loading extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Loading</h1>
//       </div>
//     )
//   }
// }

export default function Loading() {
  const {
    toggleLoading,
    setToggleLoading,
    transition,
    setTransition,
  } = React.useContext(Index)
  const [closing, setClosing] = React.useState(false)
  const { Anime } = ReactAnime

  React.useEffect(() => {
    console.log("UseEffect { Loading }", transition)
    let time = 2000

    if (toggleLoading) {
      console.log("CLOSING (toggle Loading)", transition)
      setClosing(!closing)
    }

    const timeoutId = setTimeout(() => {
      console.log("set Transition")
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
                translateX: "80vw",
                width: "20vw",
              },
              {
                translateX: "120vw",
                width: "5vw",
              },
              {
                translateX: "130vw",
                width: "1vw",
              },
            ],
            duration: 800,
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
                translateX: "80vw",
                width: "20vw",
              },
              {
                translateX: "120vw",
                width: "5vw",
              },
              {
                translateX: "130vw",
                width: "1vw",
              },
            ],
            delay: 50,
            duration: 800,
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
