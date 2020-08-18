import React from "react"

export default function ExperiencesContent({
  title,
  job,
  date,
  src,
  description,
  link,
}) {
  React.useEffect(() => {
    console.log("Content", [title, job, date, src, description, link])
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <h3>{job}</h3>
      <p>{date}</p>
      <div className="img-box">
        <img src={src} alt="image.jpeg" />
      </div>
      <p>{description}</p>
      <a href={link} target="_blank">
        {link}
      </a>
    </>
  )
}
