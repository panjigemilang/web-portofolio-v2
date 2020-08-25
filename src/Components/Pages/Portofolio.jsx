import React from "react"
import Index from "../../Context"
import Card from "./SubPages/Card"
import { content2019, content2020 } from "../Utils/ContentVariables"
import "./portofolio.scss"

export default function Portofolio() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)
  const [content, setContent] = React.useState([])

  React.useEffect(() => {
    setActive(4)
    setToggleLoading(!toggleLoading)

    const temp = []

    content2019.map((item) => temp.push(item))
    temp.push(...content2020.filter((item) => !item.title.includes("Hoping")))

    setContent(temp)
  }, [])

  return (
    <div className={`portof-app ${navShown ? "blur" : ""}`}>
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
