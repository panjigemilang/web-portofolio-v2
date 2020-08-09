import React from "react"
import Index from "../../../Context"
import Loading from "../../Commons/Loading"

export default function Portofolio() {
  const {
    transition,
    setTransition,
    toggleLoading,
    setToggleLoading,
  } = React.useContext(Index)

  React.useEffect(() => {
    const time = 1000

    const timeoutId = setTimeout(() => {
      setToggleLoading(!toggleLoading)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      {transition && <Loading />}
      <h1>Portofolio</h1>
    </div>
  )
}
