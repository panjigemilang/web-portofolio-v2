import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import Card from "./SubPages/Card"
import {
  getContent2019,
  getContent2020,
  getContent2021,
  getContent2025,
  getContent2026,
} from "../Utils/ContentVariables"
import "./portofolio.scss"

export default function Portofolio() {
  const { navShown, setActive, toggleLoading, setToggleLoading, language } =
    React.useContext(Index)
  const { t } = useTranslation()
  const [content, setContent] = React.useState([])

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(5)
    setToggleLoading(!toggleLoading)

    const content2019 = getContent2019(language).map((item) => item)
    const content2020 = getContent2020(language)
      .map((item) => item)
      .filter((item) => !item.title.includes("Hoping"))
    const content2021 = getContent2021(language).map((item) => item)
    const content2025 = getContent2025(language).map((item) => item)
    const content2026 = getContent2026(language).map((item) => item)
    const temp = []

    temp.push(...content2026)
    temp.push(...content2025)
    temp.push(...content2021)
    temp.push(...content2020)
    temp.push(...content2019)

    setContent(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  return (
    <div className={`portofolio-app ${navShown ? "blur" : ""}`}>
      <div className="block-1"></div>
      <div className="block-2"></div>
      <div className="block-3"></div>
      <div className="portofolio">
        <div className="container">
          <div className="row title-row">
            <div className="title">
              <h1>{t("portfolio.title")}</h1>
            </div>
          </div>
          <div className="timeline-container">
            <div className="vertical-line">
              <div className="diamond-cap top"></div>
              <div className="diamond-cap bottom"></div>
            </div>
            {content.map((item, i) => {
              const showYear = i === 0 || item.year !== content[i - 1].year
              return (
                <div
                  className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
                  key={i}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay="100"
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className={`time-mark ${!showYear ? "no-year" : ""}`}>
                      {showYear && <div className="year-mark">{item.year}</div>}
                      <div className="date-mark">
                        {item.month
                          ? t(`common.monthNames.${item.month.toLowerCase()}`)
                          : ""}
                      </div>
                    </div>
                    <div className="portfolio-card">
                      <Card item={item} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
