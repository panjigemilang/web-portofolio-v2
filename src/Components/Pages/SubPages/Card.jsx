import React from "react"
import DelayLink from "react-delay-link"
import RenderSmoothImage from "render-smooth-image-react"
import useDelayedUnmounting from "../../Utils/useDelayComponent"
import Skeleton from "react-loading-skeleton"

export default function Card({ item }) {
  const maxChar = 100
  const concatText = " ..."
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  const shorten = (str, maxLen, separator = " ") => {
    if (str.length <= maxLen) return str
    return str.substr(0, str.lastIndexOf(separator, maxLen))
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
              to={`/portofolio/${item.title.replace(/ /g, "-")}`}
            >
              <button>Details</button>
            </DelayLink>
          </div>
        </div>
      </div>
    </div>
  )
}
