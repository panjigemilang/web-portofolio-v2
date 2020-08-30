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
  const [textClipboard, setTextClipboard] = React.useState("")

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(5)
    setToggleLoading(!toggleLoading)

    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }, [])

  React.useEffect(() => {
    if (textClipboard.length > 1) {
      const input = document.getElementsByTagName("input")[0]

      input.select()
      document.execCommand("Copy")
      window.alert("Contact copied to clipboard!")
    }
  }, [textClipboard])

  const copyClipboard = (selector) => {
    const value = document.querySelector(`.${selector} p`).childNodes[0]
      .textContent

    if (value) setTextClipboard(value)
  }

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
                <a
                  href="https://www.docdroid.net/i0chlcz/cv-may-2020-pdf"
                  target="_blank"
                >
                  <div className="icons cv"></div>
                  <div className="square"></div>
                  <p>CV Juni 2020</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          value={textClipboard}
          style={{ height: 0, opacity: 0, width: 0 }}
          contentEditable={true}
          readOnly={false}
          disabled
        />
      </div>
    </div>
  )
}
