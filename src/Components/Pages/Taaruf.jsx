import React from "react"
import Index from "../../Context"
import { useHistory } from "react-router-dom"
import ProfileSection from "./SubPages/ProfileSection"
import Arrow from "../../Assets/img/Arrow.svg"
import Tabs from "./SubPages/Tabs"
import Modal from "../Commons/Modal"
import "./taaruf.scss"

export default function Taaruf({ match }) {
  const { toggleLoading, setToggleLoading, modalShow, setModalShow, modalSrc } =
    React.useContext(Index)
  const history = useHistory()

  React.useEffect(() => {
    window.scrollTo(0, 0)

    const today = new Date()
    const todaysQuarter = Math.floor((today.getMonth() + 3) / 3)
    const month = parseInt(match.params.date.match(/\d+(?=-)/)[0]) - 1
    const currQuarter = Math.floor((month + 3) / 3)

    if (todaysQuarter !== currQuarter || today.getMonth() !== month)
      history.push("/")

    setToggleLoading(!toggleLoading)
  }, [])

  const toBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <div className="taaruf-app container">
      <span className="particle square"></span>
      <span className="particle circle-outer"></span>
      <span className="particle small-circle"></span>
      <span className="particle triangle"></span>
      <Modal src={modalSrc} show={modalShow} setShow={setModalShow} />
      <div className="medium-block"></div>
      <ProfileSection />
      <div className="large-block">
        <div className="content" onClick={() => toBottom()}>
          <div className="text-center">Read More</div>
          <img src={Arrow} alt="arrow.svg" className="arrow" />
        </div>
      </div>
      <Tabs />
    </div>
  )
}
