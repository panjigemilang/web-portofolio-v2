import React from "react"
import RenderSmoothImage from "render-smooth-image-react"
import "render-smooth-image-react/build/style.css"

const Image = ({ src, style, objectFit = "cover" }) => {
  return (
    <div style={style}>
      <RenderSmoothImage
        src={src}
        alt="Image load error"
        objectFit={objectFit}
      />
    </div>
  )
}

export default Image
