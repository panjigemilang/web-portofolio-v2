import React, { useCallback } from "react"
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
    window.scrollTo(0, 0)

    setActive(5)
    setToggleLoading(!toggleLoading)

    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }, [])

  const copyClipboard = useCallback((selector) => {
    const value = document.querySelector(`.${selector} p`).childNodes[0]
      .textContent

    if (value) {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", value)
      } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        var textarea = document.createElement("textarea")
        textarea.textContent = value
        textarea.style.position = "fixed" // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea)
        textarea.select()

        try {
          return document.execCommand("copy") // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex)
          return false
        } finally {
          document.body.removeChild(textarea)

          window.alert("Copied to clipboard!")
        }
      }
    }
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
          <div className="col-lg-4 col-md-6 col-sm-0">
            <div className="img-box">
              <img src={PP} alt="image.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="items">
              <div className="item email">
                <a role="button" onClick={() => copyClipboard("email")}>
                  <div className="icons gmail"></div>
                  <div className="square"></div>
                  <p>panjigemilang31298@gmail.com</p>
                </a>
              </div>
              <div className="item">
                <a href="https://www.linkedin.com/in/panji-g/" target="_blank">
                  <div className="icons linkedin"></div>
                  <div className="square"></div>
                  <p>https://www.linkedin.com/in/panji-g/</p>
                </a>
              </div>
              <div className="item">
                <a href="https://bit.ly/UpworkPanji" target="_blank">
                  <div className="icons upwork"></div>
                  <div className="square"></div>
                  <p>https://bit.ly/UpworkPanji</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="items">
              <div className="item no-hp">
                <a role="button" onClick={() => copyClipboard("no-hp")}>
                  <div className="icons whatsapp"></div>
                  <div className="square"></div>
                  <p>+62895801111085</p>
                </a>
              </div>
              <div className="item kontak-line">
                <a role="button" onClick={() => copyClipboard("kontak-line")}>
                  <div className="icons line"></div>
                  <div className="square"></div>
                  <p>skidipapapsawadikhap</p>
                </a>
              </div>
              <div className="item">
                <a href="https://docdro.id/eWB4HN2" target="_blank">
                  <div className="icons cv"></div>
                  <div className="square"></div>
                  <p>CV</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
