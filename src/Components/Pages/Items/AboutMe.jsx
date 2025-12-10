import React from "react"
import moment from "moment"
import useTranslation from "../../Utils/useTranslation"

export default function AboutMe() {
  const { t } = useTranslation()
  const [headerActive, setHeaderActive] = React.useState(null)
  const [showCaption, setShowCaption] = React.useState([
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
  ])
  const years = new moment().diff(moment("2021-02-08"), "years")
  const months = new moment().diff(moment("2021-02-08"), "months") % 12
  const monthsText = months > 0 ? ` ${t("common.and")} ${months} ${t("common.months")}` : ""
  const toggleCaption = (idx) => {
    let temp = [...showCaption]

    temp[idx].show = !temp[idx].show
    setHeaderActive(idx)
    setShowCaption(temp)
  }
  const personalities = [
    {
      kelebihan: "Berlogika",
      kekurangan: "Kadang pelupa",
      undefined: "Harus disuruh dulu baru mengerjakan",
    },
    {
      kelebihan: "Suka bercanda",
      kekurangan: "Kurang inisiatif/cuek",
      undefined: "Gak suka makan jeroan dan cumi",
    },
    {
      kelebihan: "Senyum terus",
      kekurangan: "Kalo ngomong suaranya keras",
      undefined: "",
    },
    {
      kelebihan: "Gak bisa marah",
      kekurangan: "",
      undefined: "",
    },
    {
      kelebihan: "Gak bisa boong",
      kekurangan: "",
      undefined: "",
    },
    {
      kelebihan: "Gak merokok atau vape",
      kekurangan: "",
      undefined: "",
    },
  ]

  React.useEffect(() => {
    const active = showCaption.filter((caption) => caption.show === true)

    if (active.length < 1) setHeaderActive(null)
  }, [showCaption])

  return (
    <div className="about-me text-content">
      <p>&emsp;{t("aboutMe.intro")}</p>
      <div className="content">
        <ul onClick={() => toggleCaption(0)}>
          <li className="title">
            <h3 className={headerActive === 0 ? "active" : ""}>
              <strong>{t("aboutMe.q1.title")}</strong>
              &ensp;<i className="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[0].show ? "show" : "hide"
          }`}
        >
          <p>&emsp;{t("aboutMe.q1.description")}</p>
          <table className="v-c3">
            <thead>
              <tr>
                <th>{t("aboutMe.q1.table.strengths")}</th>
                <th>{t("aboutMe.q1.table.weaknesses")}</th>
                <th>{t("aboutMe.q1.table.relative")}</th>
              </tr>
            </thead>
            <tbody>
              {personalities.map((personality, idx) => (
                <tr key={personality.kelebihan + idx}>
                  <td>{personality.kelebihan}</td>
                  <td>{personality.kekurangan}</td>
                  <td>{personality.undefined}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            &emsp;{t("aboutMe.q1.contact")}
            <a
              href="https://wa.me/6289617393777?text="
              rel="noopener noreferrer"
            >
              +62 896-1739-3777
            </a>
          </p>
        </div>
        <ul onClick={() => toggleCaption(1)}>
          <li className="title">
            <h3 className={headerActive === 1 ? "active" : ""}>
              <strong>{t("aboutMe.q2.title")}</strong>
              &ensp;<i className="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[1].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;{t("aboutMe.q2.description", { years, monthsText })}
          </p>
        </div>
        <ul onClick={() => toggleCaption(2)}>
          <li className="title">
            <h3 className={headerActive === 2 ? "active" : ""}>
              <strong>{t("aboutMe.q3.title")}</strong>
              &ensp;<i className="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[2].show ? "show" : "hide"
          }`}
        >
          <p>&emsp;{t("aboutMe.q3.description1")}</p>
          <p>&emsp;{t("aboutMe.q3.description2")}</p>
        </div>
        <ul onClick={() => toggleCaption(3)}>
          <li className="title">
            <h3 className={headerActive === 3 ? "active" : ""}>
              <strong>{t("aboutMe.q4.title")}</strong>
              &ensp;<i className="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[3].show ? "show" : "hide"
          }`}
        >
          <p>&emsp;{t("aboutMe.q4.description1")}</p>
          <pre>{t("aboutMe.q4.quote")}</pre>
          <p>{t("aboutMe.q4.description2")}</p>
          <p>&emsp;{t("aboutMe.q4.description3")}</p>
        </div>
        <ul onClick={() => toggleCaption(4)}>
          <li className="title">
            <h3 className={headerActive === 4 ? "active" : ""}>
              <strong>{t("aboutMe.q5.title")}</strong>
              &ensp;<i className="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[4].show ? "show" : "hide"
          }`}
        >
          <p>&emsp;{t("aboutMe.q5.description")}</p>
          <h3 className="text-center">
            Would <span className="love">You </span>
            be <span className="me">Mine</span>
            ?
            <br />
            <span className="love">{t("aboutMe.q5.hearts")}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
