import React from "react"
import "./sectionOne.scss"

export default function SectionOne() {
  const profilePicture = require("../../../Assets/img/SectionOne.png")
  return (
    <>
      <img src={profilePicture} />
      <div className="content">
        <div className="col-6 name">
          <h1>
            Panji
            <br />
            Gemilang
          </h1>
          <button>Contact</button>
        </div>
        <div className="col-6 description">
          <h1>Web Developer and Android Developer</h1>
          <p>
            I'm 21 years old and enthusiast about web development and android
            development.
          </p>
        </div>
      </div>
    </>
  )
}
