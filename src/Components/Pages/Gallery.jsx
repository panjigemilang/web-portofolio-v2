import React from "react"
import Index from "../../Context"
import { gallery } from "../Utils/GalleryContents"
import ReactSmoothImage from "../Commons/ReactSmoothImage"
import Modal from "../Commons/Modal"
import useTranslation from "../Utils/useTranslation"
import "./gallery.scss"

export default function Gallery({ gallrs }) {
  const { navShown, setActive, toggleLoading, setToggleLoading, width } =
    React.useContext(Index)
  const { t } = useTranslation()
  const gridGallery = React.useRef({})
  const [show, setShow] = React.useState(false)
  const [src, setSrc] = React.useState("")
  const [description, setDescription] = React.useState("")
  const galleries = gallrs ? gallrs : gallery

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(4)
    setToggleLoading(!toggleLoading)

    gridGallery.current.style = `grid-template-rows: repeat(${
      galleries.length / 5 < 1 ? 2 : Math.ceil(galleries.length / 5) * 2
    }, 30vh [row-start]);`
  }, [])

  React.useEffect(() => {
    if (width < 768) {
      gridGallery.current.style = `
      grid-template-columns: repeat(2, 50% [col-start]);
      grid-template-rows: repeat(${
        galleries.length / 5 < 1 ? 4 : Math.ceil(galleries.length / 5) * 4
      }, 15vh [row-start]);
      `
    } else {
      gridGallery.current.style = `
      grid-template-columns: repeat(4, 25% [col-start]);
      grid-template-rows: repeat(${
        galleries.length / 5 < 1 ? 2 : Math.ceil(galleries.length / 5) * 2
      }, 30vh [row-start]);`
    }
  }, [width])

  return (
    <>
      <Modal
        setClass="modal-gallery"
        desc={description}
        src={src}
        show={show}
        setShow={setShow}
      />
      <div className={`gallery-app ${navShown ? "blur" : ""}`}>
        <div className="block-left-main"></div>
        <div className="block-left-boundary"></div>
        <div className="block-right-main"></div>
        <div className="block-right-boundary"></div>
        <span className="particle small-circle"></span>
        <span className="particle square"></span>
        <span className="particle triangle"></span>
        <span className="particle circle-wave"></span>
        <div className="container">
          <div className="row">
            <div className="title">
              <h1>{t("gallery.title")}</h1>
            </div>
          </div>
          <h4>{t("gallery.description")}</h4>
          <div className="grid-gallery" ref={gridGallery}>
            {galleries.map((item, i) => (
              <ReactSmoothImage
                className="gallery-item"
                key={`img-${i}`}
                src={item.src}
                setDescription={setDescription}
                setShow={setShow}
                setSrc={setSrc}
                description={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
