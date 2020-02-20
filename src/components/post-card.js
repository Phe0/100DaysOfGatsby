import React from "react"
import style from "./post-card.module.css"
import { Link } from "gatsby"

export default ({ title, date, path }) => {
  return (
    <div>
      <div className={style.card}>
        <Link
          className={style.link}
          to={path}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={style.cardContent}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.date}>{date}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
