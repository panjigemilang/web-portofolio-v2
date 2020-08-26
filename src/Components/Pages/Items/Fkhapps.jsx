import React from "react"
import Skeleton from "react-loading-skeleton"

export default function Fkhapps({ content, show, setShow, setSrc }) {
  const {
    title,
    descriptionOne,
    descriptionTwo,
    src,
    src2,
    src3,
    functions,
    technologyIntro,
    technologies,
    outro,
  } = content

  const onClick = (source) => {
    setShow(!show)
    setSrc(source)
  }

  return (
    <>
      <div className="img-box">
        {<img src={src} alt="image.jpg" onClick={() => onClick(src)} /> || (
          <Skeleton height={150} />
        )}
        <br />
        {<small className="text-muted">{title}</small> || (
          <Skeleton count={1} />
        )}
      </div>
      <p>{descriptionOne || <Skeleton count={4} />}</p>
      <p>{descriptionTwo || <Skeleton count={4} />}</p>
      <ul>
        {functions.map((item, i) => (
          <li key={i}>{item || <Skeleton count={1} />}</li>
        ))}
      </ul>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            {(
              <img src={src2} alt="image.jpg" onClick={() => onClick(src2)} />
            ) || <Skeleton height={150} />}
            <br />
            {<small className="text-muted">Login Page</small> || (
              <Skeleton count={1} />
            )}
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            {(
              <img src={src3} alt="image.jpg" onClick={() => onClick(src3)} />
            ) || <Skeleton height={150} />}
            <br />
            {<small className="text-muted">Dashboard Lecturer</small> || (
              <Skeleton count={1} />
            )}
          </div>
        </div>
      </div>
      <p>{technologyIntro || <Skeleton count={4} />}</p>
      <ul>
        {technologies.map((item, i) => (
          <li className={item.toLowerCase().replace(" ", "-")} key={i}>
            {item || <Skeleton count={1} />}
          </li>
        ))}
      </ul>
      <p>{outro || <Skeleton count={4} />}</p>
      <br />
      <br />
    </>
  )
}
