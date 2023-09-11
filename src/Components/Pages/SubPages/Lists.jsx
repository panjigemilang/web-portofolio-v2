import React from "react"

export default function Lists({ active, setActive, show, year }) {
  return (
    <div className={`lists-app ${show ? "show" : ""}`}>
      {year === 2019 && (
        <ul>
          <li
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            Mar
          </li>
          <li
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            Jul
          </li>
          <li
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            Aug
          </li>
        </ul>
      )}
      {year === 2020 && (
        <ul>
          <li
            className={active === 4 ? "active" : ""}
            onClick={() => setActive(4)}
          >
            Feb
          </li>
          <li
            className={active === 5 ? "active" : ""}
            onClick={() => setActive(5)}
          >
            May
          </li>
          <li
            className={active === 6 ? "active" : ""}
            onClick={() => setActive(6)}
          >
            Sep
          </li>
        </ul>
      )}
      {year === 2021 && (
        <ul>
          <li
            className={active === 7 ? "active" : ""}
            onClick={() => setActive(7)}
          >
            Nov
          </li>
        </ul>
      )}
    </div>
  )
}
