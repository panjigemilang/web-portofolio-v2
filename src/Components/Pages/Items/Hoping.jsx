import React from "react"

export default function Hoping({ content, show, setShow, setSrc }) {
  console.log("Props", content)
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
    <div>
      <div className="img-box">
        <img src={src2} alt="image.jpg" onClick={() => onClick(src2)} />
        <br />
        <small className="text-muted">Arrived at Osaka, Japan</small>
      </div>
      <p>{descriptionOne}</p>
      <br />
      <p>{descriptionTwo}</p>
      <br />
      <div className="img-box">
        <img src={src3} alt="image.jpg" onClick={() => onClick(src3)} />
        <br />
        <small className="text-muted">Company</small>
      </div>
      <p>{descriptionThree}</p>
      <br />
      <div className="img-box">
        <img src={src} alt="image.jpg" onClick={() => onClick(src)} />
        <br />
        <small className="text-muted">
          Take a picture with friends and company CEO
        </small>
      </div>
      <p>{descriptionFour}</p>
      <br />
      <p>{descriptionFive}</p>
      <br />
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            <img src={src4} alt="image.jpg" onClick={() => onClick(src4)} />
            <br />
            <small className="text-muted">Ōsaka jōkōen (Osaka Castle)</small>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="img-box">
            <img src={src5} alt="image.jpg" onClick={() => onClick(src5)} />
            <br />
            <small className="text-muted">Tetsugaku No Michi, Kyoto</small>
          </div>
        </div>
      </div>
      <div className="img-box">
        <img src={src6} alt="image.jpg" onClick={() => onClick(src6)} />
        <br />
        <small className="text-muted">Going back to Indonesia</small>
      </div>
    </div>
  )
}
