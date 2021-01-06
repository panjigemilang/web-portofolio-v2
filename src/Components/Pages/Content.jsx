import React from "react"
import Index from "../../Context"
import { content2019, content2020 } from "../Utils/ContentVariables"
import "./content.scss"
import Default from "./Items/Default"
import Hoping from "./Items/Hoping"
import Modal from "../Commons/Modal"
import Fkhapps from "./Items/Fkhapps"

export default function Content({ match }) {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)
  const [content, setContent] = React.useState([])
  const [item, setItem] = React.useState()
  const [show, setShow] = React.useState(false)
  const [src, setSrc] = React.useState("")
  const { title } = match.params

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(0)
    setToggleLoading(!toggleLoading)

    const temp = []

    temp.push(...content2019.filter((item) => item.title === title.replace(/-/g, ' ')))
    temp.push(...content2020.filter((item) => item.title === title.replace(/-/g, ' ')))

    setContent(temp)
  }, [])

  React.useEffect(() => {
    if (content[0]) {
      switch (content[0].title.replace(/-/g, ' ')) {
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
        case "FKH Apps (Project)":
          setItem(
            <Fkhapps
              content={content[0]}
              show={show}
              setShow={setShow}
              setSrc={setSrc}
            />
          )
          break
        case "Boleh Dicoba Digital":
          setItem(
            <Fkhapps
              content={content[0]}
              show={show}
              setShow={setShow}
              setSrc={setSrc}
            />
          )
          break
        default:
          setItem(
            <Default
              content={content[0]}
              show={show}
              setShow={setShow}
              setSrc={setSrc}
            />
          )
          break
      }
    }
  }, [content])

  return (
    <>
      <Modal src={src} show={show} setShow={setShow} />
      <div className={`content-app ${navShown ? "blur" : ""}`}>
        <div className="block-left-main"></div>
        <div className="block-left-boundary"></div>
        <div className="block-right-main"></div>
        <div className="block-right-boundary"></div>
        <span className="particle square"></span>
        <span className="particle triangle-circle"></span>
        <span className="particle triangle"></span>
        <span className="particle circle-wave"></span>
        <div className="content">
          <div className="container">
            <div className="title">
              <h1>{title.replace(/-/g, ' ')}</h1>
            </div>
            {item}
          </div>
        </div>
      </div>
    </>
  )
}
