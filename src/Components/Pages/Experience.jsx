import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import Lists from "./SubPages/Lists"
import moment from "moment"
import ExperiencesItem from "./SubPages/ExperiencesItem"
import "./experience.scss"

export default function Experience() {
  const { navShown, setActive, toggleLoading, setToggleLoading, width } =
    React.useContext(Index)
  const { t } = useTranslation()
  const [buttonTrigger, setButtonTrigger] = React.useState([false, false])
  const [timelineActive, setTimelineActive] = React.useState(1)
  const experiences = new moment().diff("2020-09-25", "years")

  React.useEffect(() => {
    window.scrollTo(0, 0)

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
      <span className="particle triangle-circle"></span>
      <span className="particle double-circle"></span>
      <div className="container">
        <div className="row content">
          <div className="col-sm-12 col-lg-6 left">
            <div className="exp">
              <h1>
                <span className="particle circle-wave"></span>
                {t("experience.title")}
              </h1>
              <p>
                {t("experience.description", {
                  years: experiences,
                  yearText: experiences > 1 ? t("experience.years") : t("experience.year"),
                })}
              </p>
            </div>
            <div className="col-sm-12 mobile">
              <ExperiencesItem active={timelineActive} />
            </div>
            <div className="timeline">
              <h1>
                {t("experience.timeline")}
                <span className="particle square-combine"></span>
              </h1>
              <div className="row">
                <div
                  className={`col-sm-12 col-lg-6 ${width < 768 && "order-2"}`}
                >
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
                <div
                  className={`col-sm-12 col-lg-6 ${width < 768 && "order-1"}`}
                >
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
