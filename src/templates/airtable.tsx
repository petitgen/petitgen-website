import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from "../components/PostCard/postCard"
import SEO from "../components/seo"
import { TagPostsWrapper, TagPageHeading, TagName } from "./templates.style"

const Tags = ({ pageContext, data }: any) => {
  // const { tag } = pageContext
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title='Stories' description={`A collection of Airtable Stories`} />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>Airtable Tags</TagName>
          {`A collection of Airtable Stories`}
        </TagPageHeading>
        {edges.map(({ node, index }: any) => (
          <PostCard
            key={node.data.story_id}
            title={node.data.Story_name}
            url='https://www.google.com'
            description={node.data.Notes}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allAirtable {
      edges {
        node {
          data {
            story_id
            Story_name
            Sprint
            Notes
          }
        }
      }
    }
  }
`
