import React from "react"
import "./modal.scss"

export default function Modal({ type, src, show, setShow }) {
  React.useEffect(() => {
    if (show) document.getElementsByTagName("body")[0].style.overflow = "hidden"
    else document.getElementsByTagName("body")[0].style.overflow = "hidden auto"
  }, [show])

  return (
    <div
      className={`modal-app ${show ? "show" : ""}`}
      onClick={() => setShow(!show)}
    >
      <hr />
      <div className="img-box">
        <img src={src} alt="image.jpg" />
      </div>
    </div>
  )
}
