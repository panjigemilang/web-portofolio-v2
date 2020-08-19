import React from "react"
import BloomBrowser from "../../../Assets/img/Bloombrowser.png"
import DevKami from "../../../Assets/img/Dev Kami.png"
import Fkhapps from "../../../Assets/img/fkhapps.png"
import Ptpnx from "../../../Assets/img/Ptpnx.png"
import Presentation from "../../../Assets/img/Presentation.jpg"

import ExperiencesContent from "./ExperiencesContent"

export default function ExperiencesItem({ active }) {
  const [content, setContent] = React.useState([])
  const [rotate, setRotate] = React.useState(false)

  const content2019 = [
    {
      title: "Devkami (Project)",
      job: "Fullstack Engineer",
      date: "Mar - May 2019 . 2 Mos",
      src: DevKami,
      description:
        "  This project is my first time making an apps as a fullstack engineer. This apps is like social media app but for developer. you can post and comment and like a post and seeing someone profile. you can check the project at the link below.",
      link: "https://devkami.herokuapp.com/",
    },
    {
      title: "PTPN X (Internship)",
      job: "Fullstack Developer",
      date: "Jul - Aug 2019 . 2 Mos",
      src: Ptpnx,
      src2: Presentation,
      description:
        "  I was doing internship as a Fullstack website developer. I made the design, front-end and the back-end using React JS, Node JS, Expressjs, and MongoDB. The sample project can be seen at the link below.",
      link: "http://kampungcerdasbersahaja.com/",
    },
    {
      title: "Kampung Desa (Project)",
      job: "Fullstack Developer",
      date: "Aug - Oct 2019 . 2 Mos",
      src: Fkhapps,
      description:
        "  I'm working as a fullstack developer, and this is my first time working with my team that I created in college. First time we met the clients and discuss the problems. The project can be seen at the link below.",
      link: "http://kampungcerdasbersahaja.com/",
    },
  ]

  const content2020 = [
    {
      title: "(有) ホーピング Hoping (Internship)",
      job: "Software Engineer",
      date: "Feb - Mar 2020 . 5 Weeks",
      src: Fkhapps,
      description:
        "  I was working as software engineer using Java, MySQL, Javascript, and Visual Basic to making desktop apps. It was supposed to be 2 months internship but I left early because of Corona Outbreak.",
      link: null,
    },
    {
      title: "FKH Apps (Project)",
      job: "Frontend Developer",
      date: "Feb - May 2020 . 3 Mos",
      src: Fkhapps,
      description:
        "  I'm working as a frontend engineer on this project. this project is about skripsi online or research paper online based inside the Veterinary Medicine Faculty of Brawijaya University environment. I'm using React JS as frontend framework. It was a little bit complex project that has 3 Users (admin, student, and lecturer) and a business-process feature.",
      link: null,
    },
    {
      title: "Bloom Browser (Project)",
      job: "Frontend Developer",
      date: `May - Present 2020 . ${new Date().getMonth() - 5} Mos`,
      src: BloomBrowser,
      description:
        "  Bloom is a free, fast, open - source, web browser. It blocks ads and website trackers, and provides a way for users to customize their search experience with images that inspire from content creators. Users decide what - if any - promoted content they elect to see and ad revenue goes to charity. The project can be seen at the link below.",
      link: "https://bloombrowser.com/",
    },
    {
      title: "Papa Blog (Project)",
      job: "Fullstack Developer",
      date: `May - Present 2020 . ${new Date().getMonth() - 5} Mos`,
      src: Fkhapps,
      description:
        "  Papa Blog is a blog website. This is my personal project to make a blog website for my father. The development progress is a bit slow. Currently the sample project isn't available.",
      link: null,
    },
  ]

  React.useEffect(() => {
    const temp = []

    switch (active) {
      case 1:
        temp.push(content2019[0])
        setContent(temp)
        break
      case 2:
        temp.push(content2019[1])
        setContent(temp)
        break
      case 3:
        temp.push(content2019[2])
        setContent(temp)
        break
      case 4:
        for (let i = 0; i < 2; i++) {
          temp.push(content2020[i])
          setContent(temp)
        }
        break
      case 5:
        for (let i = 2; i < content2020.length; i++) {
          temp.push(content2020[i])
          setContent(temp)
        }
        break
      default:
        return
    }
  }, [active])

  return (
    <>
      {content.map((item, i) => (
        <div
          className={`experiences-content-app item-${i} ${
            rotate ? "state-two" : "state-one"
          }`}
          key={i}
        >
          <ExperiencesContent
            title={item.title}
            job={item.job}
            date={item.date}
            src={item.src}
            description={item.description}
            link={item.link}
            index={i}
            rotate={rotate}
            setRotate={setRotate}
            length={content.length}
          />
        </div>
      ))}
    </>
  )
}
