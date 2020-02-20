import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from './index.module.css'
import PostCard from '../components/post-card'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.title} />
      <div className={style.indexPage}>
        <p>#100DaysOfGatsby is a 100 days challenge that gives you a different task to do each day.</p>
        <p>To me it is an opportunity to learn not only Gatsby, but a little bit more about React, GraphQL and NodeJS.</p>
        <div className={style.postsArea}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostCard key={node.frontmatter.title} title={node.frontmatter.title} date={node.frontmatter.date} path={node.fields.slug} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`