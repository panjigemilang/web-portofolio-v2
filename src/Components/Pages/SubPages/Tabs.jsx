import React from "react"
import GalleryContent from "../Items/GalleryContent"
import Pendidikan from "../Items/Pendidikan"
import "./tabs.scss"

export default function Tabs() {
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
        setContent(<div>Tentang Saya</div>)
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
          Galeri
        </button>
        <button
          className={"tabs " + (activeTab === 2 ? "active" : "")}
          onClick={() => setActiveTab(2)}
        >
          Pendidikan
        </button>
        <button
          className={"tabs " + (activeTab === 3 ? "active" : "")}
          onClick={() => setActiveTab(3)}
        >
          Tentang Saya
        </button>
      </div>
      <section className="active-tab">{content}</section>
    </section>
  )
}
