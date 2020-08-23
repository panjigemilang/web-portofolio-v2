import React from "react"
import Index from "../../Context"
import { content2019, content2020 } from "../Utils/ContentVariables"
import "./content.scss"
import Default from "./Items/Default"
import Hoping from "./Items/Hoping"
import Modal from "../Commons/Modal"

export default function Content({ match }) {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)
  const [content, setContent] = React.useState([])
  const [item, setItem] = React.useState()
  const [show, setShow] = React.useState(false)
  const [src, setSrc] = React.useState(
    "/static/media/Bandara Kansai.50cb9107.jpeg"
  )
  const { title } = match.params
  React.useEffect(() => {
    setActive(0)
    setToggleLoading(!toggleLoading)

    const temp = []

    temp.push(...content2019.filter((item) => item.title === title))
    temp.push(...content2020.filter((item) => item.title === title))

    setContent(temp)
  }, [])

  React.useEffect(() => {
    if (content[0]) {
      switch (content[0].title) {
        case "(有) ホーピング Hoping (Internship)":
          setItem(
            <Hoping
              content={content[0]}
              show={show}
              setShow={setShow}
              setSrc={setSrc}
            />
          )
          break
        default:
          setItem(<Default content={content[0]} />)
          console.log("default")
          break
      }
    }
  }, [content])

  return (
    <>
      <Modal src={src} show={show} setShow={setShow} />
      <div className="content-app">
        <div className="block-left-main"></div>
        <div className="block-left-boundary"></div>
        <div className="block-right-main"></div>
        <div className="block-right-boundary"></div>
        <div className="content">
          <div className="container">
            <div className="title">
              <h1>{title}</h1>
            </div>
            {item}
          </div>
        </div>
      </div>
    </>
  )
}
