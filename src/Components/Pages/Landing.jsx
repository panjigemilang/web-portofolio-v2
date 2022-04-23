import React from "react";
import Index from "../../Context";
import SectionOne from "./SubPages/SectionOne";
import "./landing.scss";

export default function Landing() {
  const { setActive, toggleLoading, setToggleLoading } =
    React.useContext(Index);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    setActive(1);
    setToggleLoading(!toggleLoading);
  }, []);

  return (
    <div className="landing-app">
      <span className="particle square"></span>
      <span className="particle circle-outer"></span>
      <span className="particle small-circle"></span>
      <span className="particle triangle"></span>
      <SectionOne />
      <footer>
        {(!process.env.NODE_ENV || process.env.NODE_ENV === "development") && (
          <small className="footer">Beta_v.1.4</small>
        )}
      </footer>
    </div>
  );
}
