import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import Card from "./SubPages/Card"
import { getContent2019, getContent2020 } from "../Utils/ContentVariables"
import "./portofolio.scss"

export default function Portofolio() {
  const {
    navShown,
    setActive,
    toggleLoading,
    setToggleLoading,
    language,
  } = React.useContext(Index)
  const { t } = useTranslation()
  const [content, setContent] = React.useState([])

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setActive(5)
    setToggleLoading(!toggleLoading)

    const content2019 = getContent2019(language)
    const content2020 = getContent2020(language)
    const temp = []

    content2019.map((item) => temp.push(item))
    temp.push(...content2020.filter((item) => !item.title.includes("Hoping")))

    setContent(temp)
  }, [language])

  return (
    <div className={`portofolio-app ${navShown ? "blur" : ""}`}>
      <div className="block-1"></div>
      <div className="block-2"></div>
      <div className="block-3"></div>
      <div className="portofolio">
        <div className="container">
          <div className="row">
            <div className="title">
              <h1>{t("portfolio.title")}</h1>
            </div>
            {content.map((item, i) => (
              <div
                className="card-app"
                data-aos={i % 2 !== 0 ? "zoom-in-left" : "zoom-in-right"}
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                key={i}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
