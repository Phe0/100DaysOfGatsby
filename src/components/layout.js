import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.css"
import gatsbyIcon from "../assets/images/icon.png"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={style.layout}>
      <div className={style.linkArea}>
        <Link to={`/`} style={{ textDecoration: "none"}}>
          <div className={style.linkSection}>
            <div className={style.link}>
              <h1 className={style.title}>{data.site.siteMetadata.title}</h1>
              <img className={style.iconImg} src={gatsbyIcon} alt="Gatsby Icon" />
            </div>
          </div>
        </Link>
      </div>
      {children}
    </div>
  )
}
