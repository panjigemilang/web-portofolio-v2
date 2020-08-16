import React from "react"
import "./sectionOne.scss"
import StickyNav from "../../Layouts/StickyNav"

export default function SectionOne() {
  const profilePicture = require("../../../Assets/img/SectionOne.png")
  return (
    <>
      <StickyNav />
      <div className="section-one-app">
        <img src={profilePicture} />
        <div className="content row">
          <div className="col-sm-12 col-md-7 name">
            <h1>
              Panji
              <br />
              Gemilang
            </h1>
            <div className="button-box">
              <button>CONTACT ME</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 description">
            <h1>Web Developer and Android Developer</h1>
            <p>
              I'm 21 years old and enthusiast about web development and android
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
