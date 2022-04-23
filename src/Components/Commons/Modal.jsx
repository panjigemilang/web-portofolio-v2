import React from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import "./modal.scss"

export default function Modal({
  setClass = "",
  desc = "",
  src,
  show,
  setShow,
}) {
  React.useEffect(() => {
    if (show) document.getElementsByTagName("body")[0].style.overflow = "hidden"
    else document.getElementsByTagName("body")[0].style.overflow = "hidden auto"
  }, [show])

  return (
    <div className={`modal-app ${show ? "show" : ""} ${setClass}`}>
      <hr />
      <div className="close-container">
        <div className="close-circle" onClick={() => setShow(false)}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="img-box">
        <TransformWrapper defaultScale={1} defaultPositionY={600}>
          <TransformComponent>
            <img src={src} alt="image.jpg" />
          </TransformComponent>
        </TransformWrapper>
      </div>
      {desc && (
        <div
          className="modal-description"
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      )}
    </div>
  )
}
