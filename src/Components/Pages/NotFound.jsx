import React from "react"
import Index from "../../Context"
import useTranslation from "../Utils/useTranslation"
import "./notfound.scss"

export default function NotFound() {
  const { setActive, toggleLoading, setToggleLoading } = React.useContext(Index)
  const { t } = useTranslation()

  React.useEffect(() => {
    setActive(99)
    setToggleLoading(!toggleLoading)
  }, [])

  return (
    <div className="not-found-app">
      <h1>{t("common.notFound")}</h1>
    </div>
  )
}
