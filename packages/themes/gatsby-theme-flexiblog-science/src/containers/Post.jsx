import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Stack, Main, Sidebar, Hero } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Sticky from '@components/Sticky'
import Seo from '@widgets/Seo'
import AuthorCompact from '@widgets/AuthorCompact'
import {
  PostHead,
  PostImage,
  PostBody,
  PostComments,
  PostTagsShare,
  PostFooter,
} from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts, previous, next },
  location,
  ...props
}) => {
  const relatedPosts = [
    ...(tagCategoryPosts ? tagCategoryPosts.nodes : []),
    ...(tagPosts ? tagPosts.nodes : []),
    ...(categoryPosts ? categoryPosts.nodes : []),
  ]
  const { pageContext: { services = {}, siteUrl } = {} } = props

  return (
    <>
      <Seo {...post} siteUrl={siteUrl} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PostHead {...post} />
        <Divider />
      </Stack>
      <Divider space={3} />
      <Hero wide>
        <PostImage {...post} wide />
      </Hero>
      <Divider space={3} />
      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          <CardComponent variant='paper'>
            <PostBody {...post} />
            <PostTagsShare {...post} location={location} />
            {services.disqus && <PostComments {...post} />}
            <PostFooter {...{ previous, next }} />
          </CardComponent>
        </Main>
        <Sidebar>
          <AuthorCompact author={post.author} omitTitle />
          <Divider />
          {post.category && (
            <Sticky>
              <CardList
                title='Related Posts'
                nodes={relatedPosts}
                variant='horizontal-aside'
                limit={6}
                omitCategory
                distinct
                aside
              />
            </Sticky>
          )}
        </Sidebar>
      </Stack>
    </>
  )
}

export default Post
