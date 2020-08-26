import React from "react"
import "./modal.scss"

export default function Modal({ type, src, show, setShow }) {
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
