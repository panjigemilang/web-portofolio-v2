import React from "react"
import Index from "../../Context"
import PP from "../../Assets/img/Footer.jpeg"
import "./contact.scss"

export default function Contact() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)

  React.useEffect(() => {
    setActive(5)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className={`contact-app ${navShown ? "blur" : ""}`}>
      <span className="particle square-pattern"></span>
      <span className="particle small-circle"></span>
      <span className="particle wave"></span>
      <span className="particle triangle"></span>
      <div className="block"></div>
      <div className="content container">
        <h1>
          Contact Me
          <span className="particle circle-outer"></span>
        </h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img-box">
              <img src={PP} alt="image.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="items">
              <div className="item">
                <a role="button">
                  <div className="square gmail"></div>
                </a>
              </div>
              <div className="item">
                <a href="https://www.linkedin.com/in/panji-g/" target="_blank">
                  <div className="square linkedin"></div>
                </a>
              </div>
              <div className="item">
                <a href="https://bit.ly/UpworkPanji" target="_blank">
                  <div className="square upwork"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="items">
              <div className="item">
                <a role="button">
                  <div className="square whatsapp"></div>
                </a>
              </div>
              <div className="item">
                <a role="button">
                  <div className="square line"></div>
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.docdroid.net/i0chlcz/cv-may-2020-pdf"
                  target="_blank"
                >
                  <div className="square cv"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
