import React from "react"
import GalleryContent from "../Items/GalleryContent"
import Pendidikan from "../Items/Pendidikan"
import AboutMe from "../Items/AboutMe"
import Planning from "../Items/Planning"
import useTranslation from "../../Utils/useTranslation"
import "./tabs.scss"

export default function Tabs() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = React.useState(1)
  const [content, setContent] = React.useState("")

  React.useEffect(() => {
    switch (activeTab) {
      case 1:
        setContent(<GalleryContent />)
        break
      case 2:
        setContent(<Pendidikan />)
        break
      case 3:
        setContent(<AboutMe />)
        break
      case 4:
        setContent(<Planning />)
        break
      default:
        break
    }
  }, [activeTab])

  return (
    <section className="s2">
      <div className="btn-group">
        <button
          className={"tabs " + (activeTab === 1 ? "active" : "")}
          onClick={() => setActiveTab(1)}
        >
          {t("about.tabs.gallery")}
        </button>
        <button
          className={"tabs " + (activeTab === 2 ? "active" : "")}
          onClick={() => setActiveTab(2)}
        >
          {t("about.tabs.education")}
        </button>
        <button
          className={"tabs " + (activeTab === 3 ? "active" : "")}
          onClick={() => setActiveTab(3)}
        >
          {t("about.tabs.aboutMe")}
        </button>
        <button
          className={"tabs " + (activeTab === 4 ? "active" : "")}
          onClick={() => setActiveTab(4)}
        >
          {t("about.tabs.planning")}
        </button>
      </div>
      <section className="active-tab">{content}</section>
    </section>
  )
}
