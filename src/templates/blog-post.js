import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import style from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 className={style.title} >{post.frontmatter.title}</h1>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
