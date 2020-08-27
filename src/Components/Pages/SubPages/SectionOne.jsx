import React from "react"
import DelayLink from "react-delay-link"
import useDelayedUnmounting from "../../Utils/useDelayComponent"
import profilePicture from "../../../Assets/img/SectionOne.png"
import mobileProfile from "../../../Assets/img/About.jpeg"
import StickyNav from "../../Layouts/StickyNav"
import "./sectionOne.scss"

export default function SectionOne() {
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  return (
    <>
      <StickyNav />
      <div
        className={`section-one-app ${transition === "mounted" ? "show" : ""}`}
      >
        <div className="img-box">
          <img
            src={profilePicture}
            className={transition === "mounted" ? "show" : ""}
          />
        </div>
        <div className="content row">
          <div className="col-sm-12 col-md-12 mobile">
            <div className="mobile-img-box">
              <img src={mobileProfile} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 name">
            <h1 className={transition === "mounted" ? "show" : ""}>
              Panji
              <br />
              &nbsp;Gemilang
              <span className="particle circle-and-plus"></span>
            </h1>
            <div
              className={`button-box ${transition === "mounted" ? "show" : ""}`}
            >
              <DelayLink
                delay={delay}
                clickAction={show}
                to="/contact"
                style={{ display: "inline" }}
              >
                <button>CONTACT ME</button>
              </DelayLink>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 description">
            <h1>Web Developer and Android Developer</h1>
            <p>
              I'm 21 years old and enthusiast about web development and android
              development.
              <span className="particle wave"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
