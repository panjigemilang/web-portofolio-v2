import React from "react"
import Skeleton from "react-loading-skeleton"

export default function Hoping({ content, show, setShow, setSrc }) {
  const {
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
    descriptionFive,
    src,
    src2,
    src3,
    src4,
    src5,
    src6,
  } = content

  const onClick = (source) => {
    setShow(!show)
    setSrc(source)
  }

  return (
    <>
      <div className="img-box">
        {<img src={src2} alt="image.jpg" onClick={() => onClick(src2)} /> || (
          <Skeleton height={150} />
        )}
        <br />
        {<small className="text-muted">Arrived at Osaka, Japan</small> || (
          <Skeleton count={1} />
        )}
      </div>
      <p>{descriptionOne || <Skeleton count={4} />}</p>
      <br />
      <p>{descriptionTwo || <Skeleton count={4} />}</p>
      <br />
      <div className="img-box">
        {<img src={src3} alt="image.jpg" onClick={() => onClick(src3)} /> || (
          <Skeleton height={150} />
        )}
        <br />
        {<small className="text-muted">Company</small> || (
          <Skeleton count={1} />
        )}
      </div>
      <p>{descriptionThree || <Skeleton count={4} />}</p>
      <br />
      <div className="img-box">
        {<img src={src} alt="image.jpg" onClick={() => onClick(src)} /> || (
          <Skeleton height={150} />
        )}
        <br />
        {(
          <small className="text-muted">
            Take a picture with friends and company CEO
          </small>
        ) || <Skeleton count={1} />}
      </div>
      <p>{descriptionFour || <Skeleton count={4} />}</p>
      <br />
      <p>{descriptionFive || <Skeleton count={4} />}</p>
      <br />
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            {(
              <img src={src4} alt="image.jpg" onClick={() => onClick(src4)} />
            ) || <Skeleton height={150} />}
            <br />
            {(
              <small className="text-muted">Ōsaka jōkōen (Osaka Castle)</small>
            ) || <Skeleton count={1} />}
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            {(
              <img src={src5} alt="image.jpg" onClick={() => onClick(src5)} />
            ) || <Skeleton height={150} />}
            <br />
            {(
              <small className="text-muted">Tetsugaku No Michi, Kyoto</small>
            ) || <Skeleton count={1} />}
          </div>
        </div>
      </div>
      <div className="img-box">
        {<img src={src6} alt="image.jpg" onClick={() => onClick(src6)} /> || (
          <Skeleton height={150} />
        )}
        <br />
        {<small className="text-muted">Going back to Indonesia</small> || (
          <Skeleton count={1} />
        )}
      </div>
    </>
  )
}
