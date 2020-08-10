import React from "react"
import Index from "../../../Context"
import Loading from "../../Commons/Loading"

export default function Portofolio() {
  const { transition, toggleLoading, setToggleLoading } = React.useContext(
    Index
  )

  React.useEffect(() => {
    const time = 300

    const timeoutId = setTimeout(() => {
      setToggleLoading(!toggleLoading)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="app">
      {transition && <Loading />}
      <div className="content">
        <h1>Portofolio</h1>
      </div>
    </div>
  )
}
