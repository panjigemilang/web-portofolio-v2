import React from "react"
import Index from "../../Context"
import "./experience.scss"
import Lists from "./SubPages/Lists"
import ExperiencesContent from "./Items/ExperiencesContent"
import ExperiencesItem from "./SubPages/ExperiencesItem"

export default function Experience() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)
  const [buttonTrigger, setButtonTrigger] = React.useState([false, false])
  const [timelineActive, setTimelineActive] = React.useState(1)

  React.useEffect(() => {
    setActive(3)
    setToggleLoading(!toggleLoading)
  }, [])

  const onClick = (index) => {
    let temp = [...buttonTrigger]

    temp[index] = !buttonTrigger[index]

    setButtonTrigger(temp)
  }

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
                    <button
                      className={buttonTrigger[0] ? "show" : ""}
                      onClick={() => onClick(0)}
                    >
                      2019
                    </button>
                    <Lists
                      active={timelineActive}
                      setActive={setTimelineActive}
                      show={buttonTrigger[0]}
                      year={2019}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="button-box">
                    <button
                      className={buttonTrigger[1] ? "show" : ""}
                      onClick={() => onClick(1)}
                    >
                      2020
                    </button>
                    <Lists
                      active={timelineActive}
                      setActive={setTimelineActive}
                      show={buttonTrigger[1]}
                      year={2020}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 right">
            <ExperiencesItem active={timelineActive} />
          </div>
        </div>
      </div>
    </div>
  )
}
