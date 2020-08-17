import React from "react"
import Index from "../../Context"
import "./experience.scss"

export default function Experience() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)

  React.useEffect(() => {
    setActive(3)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className={`experience-app ${navShown ? "blur" : ""}`}>
      <div className="container">
        <div className="row content">
          <div className="col-sm-12 col-lg-6 left">
            <div className="exp">
              <h1>Experiences</h1>
              <p>
                Working experiences and projects in the informatics engineering
                field in 1 year.
              </p>
            </div>
            <div className="timeline">
              <h1>Timeline</h1>
              <div className="row">
                <div className="col-6">
                  <div className="button-box">
                    <button>2019</button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="button-box">
                    <button>2020</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 right">
            <h1>Hoping</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
