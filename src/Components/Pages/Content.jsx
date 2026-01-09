import React from "react"
import Index from "../../Context"
import { getTranslatedContent } from "../Utils/getTranslatedContent"
import "./content.scss"
import Default from "./Items/Default"
import Hoping from "./Items/Hoping"
import Modal from "../Commons/Modal"
import Fkhapps from "./Items/Fkhapps"

export default function Content({ match }) {
  const { navShown, setActive, toggleLoading, setToggleLoading, language } =
    React.useContext(Index)
  const [content, setContent] = React.useState([])
  const [item, setItem] = React.useState()
  const [show, setShow] = React.useState(false)
  const [src, setSrc] = React.useState("")
  const { title } = match.params

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(0)
    setToggleLoading(!toggleLoading)

    // Get original content to match by original title (from URL)
    const {
      content2019,
      content2020,
      content2021,
      content2025,
      content2026,
    } = require("../Utils/ContentVariables")
    const originalTitle = title.replace(/-/g, " ")

    const allContent = [
      ...content2019,
      ...content2020,
      ...content2021,
      ...content2025,
      ...content2026,
    ]

    // Find original item
    const originalItem = allContent.find((item) => item.title === originalTitle)

    if (originalItem) {
      // Get translated version
      const translatedItem = getTranslatedContent(originalItem, language)
      setContent([translatedItem])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, title])

  React.useEffect(() => {
    if (content[0]) {
      // Use original title from URL to determine component type
      const originalTitle = title.replace(/-/g, " ")

      switch (originalTitle) {
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
        case "Boleh Dicoba Digital":
        case "Kane Kashite":
        case "Opsileave":
        case "Haikal Management System":
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
  }, [content, title, show, setShow, setSrc])

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
            <div className="row">
              <div className="title">
                <h1>{content[0]?.title || title.replace(/-/g, " ")}</h1>
              </div>
            </div>
            {item}
          </div>
        </div>
      </div>
    </>
  )
}
