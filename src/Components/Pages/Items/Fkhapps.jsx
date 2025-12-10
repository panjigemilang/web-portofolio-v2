import React from "react"
import Skeleton from "react-loading-skeleton"
import useTranslation from "../../Utils/useTranslation"

export default function Fkhapps({ content, show, setShow, setSrc }) {
  const { t } = useTranslation()
  const {
    title,
    descriptionOne,
    descriptionTwo,
    src,
    src2,
    src2description,
    src3,
    src3description,
    functions,
    technologyIntro,
    technologies,
    outro,
    link,
    imageCaptions,
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
            {<small className="text-muted">{imageCaptions?.login || src2description}</small> || (
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
            {<small className="text-muted">{imageCaptions?.dashboard || src3description}</small> || (
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
      &emsp;
      <a href={link} target="_blank">
        {link}
      </a>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
