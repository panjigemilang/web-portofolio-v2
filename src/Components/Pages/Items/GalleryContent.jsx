import React from "react"
import Index from "../../../Context"
import { taarufGalleries } from "../../Utils/GalleryContents"
import ReactSmoothImage from "../../Commons/ReactSmoothImage"

export default function GalleryContent() {
  const { setModalSrc, setModalShow, width } = React.useContext(Index)
  const gridGallery = React.useRef({})
  const [description, setDescription] = React.useState("")

  React.useEffect(() => {
    gridGallery.current.style = `grid-template-rows: repeat(${
      taarufGalleries.length / 5 < 1
        ? 2
        : Math.ceil(taarufGalleries.length / 5) * 2
    }, 30vh [row-start]);`
  }, [])

  React.useEffect(() => {
    if (width < 768) {
      gridGallery.current.style = `
        grid-template-columns: repeat(2, 50% [col-start]);
        grid-template-rows: repeat(${
          taarufGalleries.length / 5 < 1
            ? 4
            : Math.ceil(taarufGalleries.length / 5) * 4
        }, 15vh [row-start]);
        `
    } else {
      gridGallery.current.style = `
        grid-template-columns: repeat(4, 25% [col-start]);
        grid-template-rows: repeat(${
          taarufGalleries.length / 5 < 1
            ? 2
            : Math.ceil(taarufGalleries.length / 5) * 2
        }, 30vh [row-start]);`
    }
  }, [width])

  return (
    <div className="grid-gallery" ref={gridGallery}>
      {taarufGalleries.map((item, i) => (
        <ReactSmoothImage
          className="gallery-item"
          key={`img-${i}`}
          src={item}
          setDescription={setDescription}
          setShow={setModalShow}
          setSrc={setModalSrc}
        />
      ))}
    </div>
  )
}
