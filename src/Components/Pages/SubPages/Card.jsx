import React from "react"
import DelayLink from "react-delay-link"
import RenderSmoothImage from "render-smooth-image-react"
import useDelayedUnmounting from "../../Utils/useDelayComponent"
import useTranslation from "../../Utils/useTranslation"
import { getLocalizedPath } from "../../Utils/languageRouting"
import Index from "../../../Context"
import Skeleton from "react-loading-skeleton"

export default function Card({ item }) {
  const { language } = React.useContext(Index)
  const { t } = useTranslation()
  const maxChar = 100
  const concatText = " ..."
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  const shorten = (str, maxLen, separator = " ") => {
    if (str.length <= maxLen) return str
    let cutIndex = str.lastIndexOf(separator, maxLen)
    // If no separator found (e.g. for Japanese text), cut at maxLen
    if (cutIndex === -1) cutIndex = maxLen
    return str.substring(0, cutIndex)
  }

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <div className="img-box">
          <RenderSmoothImage
            src={item.src}
            alt="Image load error"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="content">
          <h2>{item.title || <Skeleton />}</h2>
          <p>
            {shorten(item.description, maxChar).concat(concatText) || (
              <Skeleton count={4} />
            )}
          </p>
          <div className="button-box">
            <DelayLink
              clickAction={show}
              delay={delay}
              to={getLocalizedPath(
                `/portofolio/${item.title.replace(/ /g, "-")}`,
                language
              )}
            >
              <button>{t("portfolio.details")}</button>
            </DelayLink>
          </div>
        </div>
      </div>
    </div>
  )
}
