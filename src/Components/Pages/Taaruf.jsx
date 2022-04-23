import React from "react"
import Index from "../../Context"
import { useHistory } from "react-router-dom"
import ProfileSection from "./SubPages/ProfileSection"
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

  return (
    <div className="taaruf-app container">
      <Modal src={modalSrc} show={modalShow} setShow={setModalShow} />
      <div className="medium-block"></div>
      <ProfileSection />
      <div className="large-block"></div>
      <Tabs />
    </div>
  )
}
