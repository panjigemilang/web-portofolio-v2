import React from "react"
import DelayLink from "react-delay-link"
import useDelayedUnmounting from "../../Utils/useDelayComponent"
import profilePicture from "../../../Assets/img/SectionOne.png"
import StickyNav from "../../Layouts/StickyNav"
import "./sectionOne.scss"

export default function SectionOne() {
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

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
            <DelayLink delay={delay} clickAction={show} to="/contact">
              <div className="button-box">
                <button>CONTACT ME</button>
              </div>
            </DelayLink>
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
