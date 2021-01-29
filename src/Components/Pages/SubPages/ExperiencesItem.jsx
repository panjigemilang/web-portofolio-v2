import React from "react"
import { content2019, content2020 } from "../../Utils/ContentVariables"
import ExperiencesContent from "../Items/ExperiencesContent"

export default function ExperiencesItem({ active }) {
  const [content, setContent] = React.useState([])
  const [rotate, setRotate] = React.useState(false)

  React.useEffect(() => {
    const temp = []

    // set Rotate to default
    setRotate(false)

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
        case 6:
        temp.push(content2020[4])
        setContent(temp)
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
            src2={item.src2}
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
