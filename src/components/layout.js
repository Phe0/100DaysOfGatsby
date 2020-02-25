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
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className={style.linkSection}>
            <div className={style.link}>
              <h3 className={style.title}>{data.site.siteMetadata.title}</h3>
              <img
                className={style.iconImg}
                src={gatsbyIcon}
                alt="Gatsby Icon"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className={style.content}>{children}</div>
      <div className={style.bottom}>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h6 className={style.links}>HOME</h6>
        </Link>
        <Link to={`/about`} style={{ textDecoration: "none" }}>
          <h6 className={style.links}>ABOUT ME</h6>
        </Link>
      </div>
    </div>
  )
}
