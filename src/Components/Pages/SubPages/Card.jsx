import React from "react"
import DelayLink from "react-delay-link"
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
          {<img src={item.src} alt="Image.jpg" /> || <Skeleton height={150} />}
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
          <DelayLink
            clickAction={show}
            delay={delay}
            to={`/portofolio/${item.title}`}
          >
            <div className="button-box">
              <button>Details</button>
            </div>
          </DelayLink>
        </div>
      </div>
    </div>
  )
}
