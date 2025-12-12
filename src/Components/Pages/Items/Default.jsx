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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = (source) => {
    if (source) {
      setSrc(source)
      setShow(true)
    }
  }

  const imageLoaded = () => {
    if (!imgLoad) {
      setImgLoad(true)
    }
  }

  return (
    <>
      <div className="img-box">
        {src && (
          <img
            src={src}
            alt=""
            onClick={() => onClick(src)}
            onLoad={imageLoaded}
            ref={imgRef}
            style={{
              display: imgLoad ? "inline-block" : "none",
              cursor: "pointer",
            }}
          />
        )}
        {!imgLoad && <i className="fas fa-spinner fa-spin"></i>}
        <br />
        <small className="text-muted">{title || <Skeleton count={1} />}</small>
      </div>
      <p>{descriptionOne || <Skeleton count={4} />}</p>
      {functions && functions.length > 0 && (
        <ul>
          {functions.map((item, i) => (
            <li key={i}>{item || <Skeleton count={1} />}</li>
          ))}
        </ul>
      )}
      <p>{descriptionTwo || <Skeleton count={4} />}</p>
      {src2 !== undefined && src2 && (
        <div className="img-box">
          <img
            src={src2}
            alt=""
            onClick={() => onClick(src2)}
            style={{ cursor: "pointer" }}
          />
          <br />
          <small className="text-muted">
            {title || <Skeleton count={1} />}
          </small>
        </div>
      )}
      <p>{technologyIntro || <Skeleton count={4} />}</p>
      {technologies && technologies.length > 0 && (
        <ul>
          {technologies.map((item, i) => {
            // Normalize technology name for CSS class
            // Handle special characters: C# -> csharp, .NET -> dotnet
            const normalizedName = item
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/#/g, "sharp")
              .replace(/\./g, "dot")
              .replace(/\//g, "-")

            return (
              <li className={normalizedName} key={i}>
                {item || <Skeleton count={1} />}
              </li>
            )
          })}
        </ul>
      )}
      <p>{outro || <Skeleton count={4} />}</p>
      {link && link.trim() !== "" && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      )}
      <br />
      <br />
    </>
  )
}
