const getValue = require('get-value')
const typesDefs = require('../types')

module.exports = pluginOptions => {
  const services = {
    algolia: getValue(pluginOptions, 'services.algolia', false),
    mailchimp: getValue(pluginOptions, 'services.mailchimp', false),
    disqus: getValue(pluginOptions, 'services.disqus', false)
  }

  const sources = [
    {
      name: 'mdx',
      enabled: getValue(pluginOptions, 'sources.local', true),
      extensions: getValue(pluginOptions, 'mdx.extensions', ['.mdx', '.md']),
      sourceInstanceName: 'article',
      typeDefs: typesDefs.file
    },
    {
      name: 'contentful',
      enabled: getValue(pluginOptions, 'sources.contentful', false),
      sourcePlugin: 'gatsby-source-contentful',
      typeDefs: typesDefs.contentful,
      typeDefsFallback: typesDefs.contentfulFallback
    },
    {
      name: 'sanity',
      enabled: getValue(pluginOptions, 'sources.sanity', false),
      sourcePlugin: 'gatsby-source-sanity',
      typeDefs: typesDefs.sanity,
      typeDefsFallback: typesDefs.sanityFallback
    }
  ]
  const siteUrl = pluginOptions.siteUrl || null

  const basePath = pluginOptions.basePath || '/'

  const localPaths = [
    {
      name: 'article',
      path: getValue(pluginOptions, 'localPaths.post', 'content/posts')
    },
    {
      name: 'author',
      path: getValue(pluginOptions, 'localPaths.author', 'content/authors')
    },
    {
      name: 'category',
      path: getValue(pluginOptions, 'localPaths.category', 'content/categories')
    }
  ]

  const staticPaths = [
    {
      name: 'asset',
      path: getValue(pluginOptions, 'localPaths.asset', 'content/assets')
    }
  ]

  const sitePaths = {
    AuthorsJson: getValue(pluginOptions, 'sitePaths.author', '/author'),
    SanityAuthorProxy: getValue(pluginOptions, 'sitePaths.author', '/author'),
    ContentfulAuthorProxy: getValue(
      pluginOptions,
      'sitePaths.author',
      '/author'
    ),
    ArticleTag: getValue(pluginOptions, 'sitePaths.tag', '/tag'),
    CategoriesJson: getValue(pluginOptions, 'sitePaths.category', '/category'),
    SanityCategoryProxy: getValue(
      pluginOptions,
      'sitePaths.category',
      '/category'
    ),
    ContentfulCategoryProxy: getValue(
      pluginOptions,
      'sitePaths.category',
      '/category'
    )
  }

  const pagingParam = pluginOptions.pagingParam || 'page'
  const paginatePostsPage = pluginOptions.paginatePostsPage || false
  const homePostsPerPage = pluginOptions.homePostsPerPage || 6
  const collectionPostsPerPage = pluginOptions.collectionPostsPerPage || 6

  const mobileMenu = null // Will populate by: utils/queryMobileMenu.js

  const pageContextOptions = {
    paginatePostsPage,
    basePath,
    services,
    siteUrl,
    mobileMenu
  }

  return {
    services,
    sources,
    siteUrl,
    basePath,
    localPaths,
    staticPaths,
    sitePaths,
    pagingParam,
    homePostsPerPage,
    paginatePostsPage,
    collectionPostsPerPage,
    pageContextOptions
  }
}
