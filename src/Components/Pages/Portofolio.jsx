import React from "react"
import Index from "../../Context"
import Card from "./SubPages/Card"
import { content2019, content2020 } from "../Utils/ContentVariables"
import { useScrollPosition } from "../Utils/useScrollPosition"
import "./portofolio.scss"

export default function Portofolio() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)
  const [content, setContent] = React.useState([])
  let imgElements

  useScrollPosition(({ prevPos, currPos }) => {
    const y = currPos.y * -1
    imgElements = document.querySelectorAll(".card-app")
    console.log("Position", y)

    if (y < 200) {
      for (let i = 2; i < imgElements.length; i++) {
        imgElements[i].classList.remove("show")
      }
    } else if (y >= 200 && y < 750) {
      for (let i = 2; i < imgElements.length - 2; i++) {
        imgElements[i].classList.add("show")
      }
    } else if (y >= 750) {
      for (let i = 4; i < imgElements.length; i++) {
        imgElements[i].classList.add("show")
      }
    }
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(4)
    setToggleLoading(!toggleLoading)

    const temp = []

    content2019.map((item) => temp.push(item))
    temp.push(...content2020.filter((item) => !item.title.includes("Hoping")))

    setContent(temp)
  }, [])

  return (
    <div className={`portofolio-app ${navShown ? "blur" : ""}`}>
      <div className="block-1"></div>
      <div className="block-2"></div>
      <div className="block-3"></div>
      <div className="portofolio">
        <div className="container">
          <div className="row">
            <div className="title">
              <h1>Portofolio</h1>
            </div>
            {content.map((item, i) => (
              <div
                className={`card-app ${i > 1 && i % 2 !== 0 ? "right" : ""}${
                  i > 1 && i % 2 === 0 ? "left" : ""
                }`}
                key={i}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
