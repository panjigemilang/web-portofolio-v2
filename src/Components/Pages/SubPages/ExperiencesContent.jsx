import React from "react"
import Skeleton from "react-loading-skeleton"

export default function ExperiencesContent({
  title,
  job,
  date,
  src,
  description,
  link,
  index,
  length,
  containerRef,
}) {
  const onClick = () => {
    console.log("Container Ref", containerRef)
  }

  return (
    <>
      <h1>{title || <Skeleton />}</h1>
      <h3>{job || <Skeleton count={1} />}</h3>
      <p>{date || <Skeleton count={1} />}</p>
      <div className="img-box">
        {length > 1 && index === 0 && (
          <a role="button" onClick={() => onClick()}>
            <i className="fas fa-arrow-right"></i>
          </a>
        )}
        {<img src={src} alt="image.jpeg" /> || <Skeleton circle={true} />}
        {length > 1 && index === 1 && (
          <a role="button" onClick={() => onClick()}>
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
