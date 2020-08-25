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

  // useScrollPosition(({ prevPos, currPos }) => {
  //   const y = currPos.y * -1
  //   imgElements = document.querySelectorAll(".card-app")
  //   console.log("Position", y)

  //   if (y < 200) {
  //     imgElements[2].style.opacity = 0
  //     setVendor(imgElements[2], "Transform", "translateX(-40em)")
  //     imgElements[3].style.opacity = 0
  //     setVendor(imgElements[3], "Transform", "translateX(40em)")
  //   } else if (y >= 200) {
  //     imgElements[2].style.opacity = 1
  //     setVendor(imgElements[2], "Transform", "translateX(0)")
  //     imgElements[3].style.opacity = 1
  //     setVendor(imgElements[3], "Transform", "translateX(0)")
  //   } else if (y >= 800) {
  //   }
  // })

  React.useEffect(() => {
    setActive(4)
    setToggleLoading(!toggleLoading)

    const temp = []

    content2019.map((item) => temp.push(item))
    temp.push(...content2020.filter((item) => !item.title.includes("Hoping")))

    setContent(temp)
  }, [])

  const setVendor = (element, property, value) => {
    element.style["webkit" + property] = value
    element.style["moz" + property] = value
    element.style["ms" + property] = value
    element.style["o" + property] = value
  }

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
              <div className="card-app" key={i}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
