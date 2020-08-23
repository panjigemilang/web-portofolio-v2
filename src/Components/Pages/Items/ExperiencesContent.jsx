import React from "react"
import DelayLink from "react-delay-link"
import Skeleton from "react-loading-skeleton"
import useDelayedUnmounting from "../../Utils/useDelayComponent"

export default function ExperiencesContent({
  title,
  job,
  date,
  src,
  src2,
  description,
  link,
  index,
  rotate,
  setRotate,
  length,
}) {
  const [hover, setHover] = React.useState(false)
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 500

  return (
    <>
      <h1>{title || <Skeleton />}</h1>
      <h3>{job || <Skeleton count={1} />}</h3>
      <p>{date || <Skeleton count={1} />}</p>
      <div className="img-box">
        <DelayLink clickAction={show} delay={delay} to={`/portofolio/${title}`}>
          <div
            className="img-overlay"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            <div className="button-box">
              <button>Detail</button>
            </div>
          </div>
        </DelayLink>
        {length > 1 && index === 0 && (
          <a role="button" onClick={() => setRotate(!rotate)}>
            <i className="fas fa-arrow-right"></i>
          </a>
        )}
        {(
          <img
            className={hover ? "hover" : ""}
            src={title.includes("PTPN") ? src2 : src}
            alt="image.jpeg"
          />
        ) || <Skeleton circle={true} />}
        {length > 1 && index === 1 && (
          <a role="button" onClick={() => setRotate(!rotate)}>
            <i className="fas fa-arrow-left"></i>
          </a>
        )}
      </div>
      <p>{description || <Skeleton count={4} />}</p>
      {link !== null && (
        <a href={link} target="_blank">
          {link || <Skeleton count={1} />}
        </a>
      )}
    </>
  )
}
