import React from "react"
import DelayLink from "react-delay-link"
import Index from "../../Context"
import useDelayedUnmounting from "../Utils/useDelayComponent"
import { content2019, content2020 } from "../Utils/ContentVariables"
import "./content.scss"

export default function Content({ match }) {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)
  const [content, setContent] = React.useState([])
  const { title } = match.params
  const [transition, show] = useDelayedUnmounting(1600)
  const delay = 800

  React.useEffect(() => {
    setActive(0)
    setToggleLoading(!toggleLoading)

    const temp = []

    temp.push(...content2019.filter((item) => item.title === title))
    temp.push(...content2020.filter((item) => item.title === title))

    setContent(temp)
  }, [])

  return (
    <div className="content-app">
      <DelayLink clickAction={show} delay={delay} to="/portofolio">
        Go Back
      </DelayLink>
      <div className="block-left-main"></div>
      <div className="block-left-boundary"></div>
      <div className="block-right-main"></div>
      <div className="block-right-boundary"></div>
      <div className="content">
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          {content[0] && (
            <div className="content-description">
              <div className="img-box">
                <img src={content[0].src} alt="image.jpg" />
              </div>
              <div className="description">
                <p>{content[0].description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
