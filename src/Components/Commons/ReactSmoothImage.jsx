import React from "react"
import RenderSmoothImage from "render-smooth-image-react"
import "render-smooth-image-react/build/style.css"

const Image = ({
  className = "item",
  src,
  style = {},
  objectFit = "cover",
  setDescription = {},
  setShow = {},
  setSrc = {},
  description = "",
}) => {
  const detailImage = () => {
    setDescription(description.desc)
    setShow(true)
    setSrc(src)
  }

  return (
    <>
      <div style={style} className={className} onClick={detailImage}>
        <RenderSmoothImage
          src={src}
          alt="Image load error"
          objectFit={objectFit}
        />
      </div>
    </>
  )
}

export default Image
