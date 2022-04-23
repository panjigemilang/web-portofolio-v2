import React from "react";
import DelayLink from "react-delay-link";
import Skeleton from "react-loading-skeleton";
import useDelayedUnmounting from "../../Utils/useDelayComponent";

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
  const imgRef = React.useRef();
  const [hover, setHover] = React.useState(false);
  const [imgLoad, setImgLoad] = React.useState(false);
  const [transition, show] = useDelayedUnmounting(1600);
  const delay = 500;

  React.useEffect(() => {
    const img = imgRef.current;

    if (img && img.complete) {
      imageLoaded();
    }
  }, []);

  const imageLoaded = () => {
    if (!imgLoad) {
      setImgLoad(true);
    }
  };

  return (
    <>
      <h1>{title || <Skeleton />}</h1>
      <h3>{job || <Skeleton count={1} />}</h3>
      <p>{date || <Skeleton count={1} />}</p>
      <div className="img-container">
        <DelayLink
          clickAction={show}
          delay={delay}
          to={`/portofolio/${title.replace(/ /g, "-")}`}
        >
          <div
            className="img-overlay"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
        <div className="img-box">
          <img
            ref={imgRef}
            className={hover ? "hover" : ""}
            src={title.includes("PTPN") ? src2 : src}
            alt=""
            onLoad={imageLoaded}
            style={{ display: imgLoad ? "block" : "none" }}
          />
          {!imgLoad && <i className="fas fa-spinner fa-spin"></i>}
          <span className="particle square-outer"></span>
          <span className="particle line-rectangle"></span>
        </div>
        {length > 1 && index === 1 && (
          <a role="button" onClick={() => setRotate(!rotate)}>
            <i className="fas fa-arrow-left"></i>
          </a>
        )}
      </div>
      <p>{description || <Skeleton count={4} />}</p>
      {link !== null && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link || <Skeleton count={1} />}
        </a>
      )}
    </>
  );
}
