import React from "react"
import Skeleton from "react-loading-skeleton"

export default function Default({ content, show, setShow, setSrc }) {
  const {
    descriptionOne,
    descriptionTwo,
    src,
    src2,
    functions,
    technologyIntro,
    technologies,
    outro,
    link,
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
        {<small className="text-muted">Arrived at Osaka, Japan</small> || (
          <Skeleton count={1} />
        )}
      </div>
      <p>{descriptionOne || <Skeleton count={4} />}</p>
      <ul>
        {functions.map((item, i) => (
          <li key={i}>{item || <Skeleton count={1} />}</li>
        ))}
      </ul>
      <p>{descriptionTwo || <Skeleton count={4} />}</p>
      <p>{technologyIntro || <Skeleton count={4} />}</p>
      <ul>
        {functions.map((item, i) => (
          <li className={item.toLowerCase().replace(" ", "-")} key={i}>
            {item || <Skeleton count={1} />}
          </li>
        ))}
      </ul>
      <p>{outro || <Skeleton count={4} />}</p>
      <a href={link} target="_blank">
        {link}
      </a>
    </>
  )
}
