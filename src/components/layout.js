import React from "react"
import { Link } from "gatsby"
import style from "./layout.module.css"
import gatsbyIcon from "../assets/images/icon.png"

export default ({ children }) => (
    <div className={style.layout}>
      <div className={style.linkArea}>
        <Link to={`/`} style={{ textDecoration: "none"}}>
          <div className={style.linkSection}>
            <div className={style.link}>
              <h1 className={style.title}>#100DaysOf</h1>
              <img className={style.iconImg} src={gatsbyIcon} alt="Gatsby Icon" />
            </div>
          </div>
        </Link>
      </div>
      {children}
    </div>
)
