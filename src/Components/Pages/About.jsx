import React from "react"
import Index from "../../Context"
import "./about.scss"

export default function About() {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)

  React.useEffect(() => {
    setActive(2)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="about-app">
      <div className="block"></div>
      <div className="about">
        <div className="content">
          <h1>Let's build your awesome projects together!</h1>
          <hr />
          <p>
            I'll be glad to be a part of your awesome projects and let's do good
            together!
          </p>
          <div className="button-box">
            <button>ABOUT ME</button>
          </div>
        </div>
      </div>
    </div>
  )
}
