import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import Lists from "./SubPages/Lists"
import moment from "moment"
import ExperiencesItem from "./SubPages/ExperiencesItem"
import { timelineData } from "../Utils/timelineData"
import "./experience.scss"

export default function Experience() {
  const { navShown, setActive, toggleLoading, setToggleLoading } =
    React.useContext(Index)
  const { t } = useTranslation()
  const [expandedYears, setExpandedYears] = React.useState({})
  const [timelineActive, setTimelineActive] = React.useState(1)
  const experiences = new moment().diff("2020-09-25", "years")

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(3)
    setToggleLoading(!toggleLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleYear = (year) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
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
                  yearText:
                    experiences > 1
                      ? t("experience.years")
                      : t("experience.year"),
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
              <div className="timeline-container">
                {timelineData.map((yearData, index) => (
                  <div
                    key={yearData.year}
                    className={`timeline-year ${
                      expandedYears[yearData.year] ? "expanded" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      className="year-button"
                      onClick={() => toggleYear(yearData.year)}
                      aria-expanded={expandedYears[yearData.year]}
                    >
                      <span className="year-number">{yearData.year}</span>
                      <span className="year-indicator">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <span className="year-glow"></span>
                    </button>
                    <Lists
                      active={timelineActive}
                      setActive={setTimelineActive}
                      show={expandedYears[yearData.year]}
                      year={yearData.year}
                    />
                  </div>
                ))}
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
