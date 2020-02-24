import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./about.module.css"
// import PostCard from "../components/post-card"
// import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <h1>About Me</h1>
      <div className={style.container}>
          <div className={style.text}>
            <p>Hello! My name is Pedro Féo, I'm a Software Engineer student based in Brasília, Brazil. I enjoy developing websites and web apps that are not only intuitive but make the user want to use it.</p>
            <p>Currently I'm attending to <a href="https://www.unb.br/" rel="noopener noreferrer" target="_blank">UnB</a>, where I had the opportunity to work on a variety of projects, programs and classes. Besides that I'm a developer intern at <a href="https://react-it.com/" rel="noopener noreferrer" target="_blank">React-it Solutions</a>, where I work on many projects on a daily basis.</p>
          </div>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt="Pedro Féo"
          objectFit="cover"
          object Position="50% 50%"
          className={style.img}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "assets/images/selfie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
