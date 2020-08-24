import React from "react"
import Index from "../../Context"
import PP from "../../Assets/img/About.jpeg"
import "./about.scss"

export default function About() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)

  React.useEffect(() => {
    setActive(2)
    setToggleLoading(!toggleLoading)

    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }, [])

  return (
    <div className={`about-app ${navShown ? "blur" : ""}`}>
      <div className="about">
        <div className="block"></div>
        <div className="block-2"></div>
        <div className="content">
          <h1>Let's build your awesome projects together!</h1>
          <hr />
          <p>
            I'll be glad to be a part of your awesome projects and let's do good
            together!
          </p>
          <a href="#about-right">
            <div className="button-box">
              <button>ABOUT ME</button>
            </div>
          </a>
        </div>
      </div>
      <div className="about-right" id="about-right">
        <div className="city"></div>
        <div className="block"></div>
        <div className="content container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="img-box">
                <img src={PP} alt="profile_picture.jpg" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="description">
                <h3>Good day! I'm Panji.</h3>
                <p>Website developer. React developer. Traveler.</p>
                <p>
                  I'm interested about web development and android development.
                  I like to watch Youtube but in 1.75x playback speed because I
                  don't like wasting my time.
                </p>
                <p>
                  I like to having conversations wiht people and I had many
                  friends from various city. In August 2019 I made a team with 5
                  members to build a small software house providing a service to
                  build a UI design, web, and android apps
                </p>
                <p>
                  Feel free to call me and let's build your super mega awesome
                  project together! together we can!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <a href="https://www.linkedin.com/in/panji-g/" target="_blank">
                <div className="circle linkedind"></div>
                <p>&emsp;Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
