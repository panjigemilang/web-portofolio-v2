import React from "react"
import Skeleton from "react-loading-skeleton"

export default function Default({ content, show, setShow, setSrc }) {
  const {
    title,
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
  const imgRef = React.useRef()
  const [imgLoad, setImgLoad] = React.useState(false)

  React.useEffect(() => {
    const img = imgRef.current

    if (img && img.complete) {
      imageLoaded()
    }
  }, [])

  const onClick = (source) => {
    setShow(!show)
    setSrc(source)
  }

  const imageLoaded = () => {
    if (!imgLoad) {
      setImgLoad(true)
    }
  }

  return (
    <>
      <div className="img-box">
        <img
          src={src}
          alt="image.jpg"
          onClick={() => onClick(src)}
          onLoad={imageLoaded}
          ref={imgRef}
          style={{ display: imgLoad ? "inline-block" : "none" }}
        />
        {!imgLoad && <i className="fas fa-spinner fa-spin"></i>}
        <br />
        {<small className="text-muted">{title}</small> || (
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
      {src2 !== undefined && (
        <div className="img-box">
          {<img src={src2} alt="image.jpg" onClick={() => onClick(src2)} /> || (
            <Skeleton height={150} />
          )}
          <br />
          {<small className="text-muted">{title}</small> || (
            <Skeleton count={1} />
          )}
        </div>
      )}
      <p>{technologyIntro || <Skeleton count={4} />}</p>
      <ul>
        {technologies.map((item, i) => (
          <li className={item.toLowerCase().replace(" ", "-")} key={i}>
            {item || <Skeleton count={1} />}
          </li>
        ))}
      </ul>
      <p>{outro || <Skeleton count={4} />}</p>
      <a href={link} target="_blank">
        {link}
      </a>
      <br />
      <br />
    </>
  )
}
