import React from "react"
import { getMonthsForYear } from "../../Utils/timelineData"

export default function Lists({ active, setActive, show, year }) {
  const months = getMonthsForYear(year)

  return (
    <div className={`lists-app ${show ? "show" : ""}`}>
      <ul>
        {months.map((monthData, index) => (
          <li
            key={`${year}-${monthData.month}-${index}`}
            className={`overflow-hidden ${
              active === monthData.activeId ? "active" : ""
            }`}
            onClick={() => setActive(monthData.activeId)}
            data-month={monthData.month}
          >
            <span className="month-text">{monthData.month}</span>
            <span className="active-indicator"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
