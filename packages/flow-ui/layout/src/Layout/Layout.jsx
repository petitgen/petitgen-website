import React from 'react'
import { Global } from '@emotion/core'
import { Flex, Box } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Layout = ({ children, pageContext, location }) => (
  <pageContextProvider.Provider value={{ pageContext, location }}>
    <Flex variant='layout.layout'>
      <Global styles={theme => theme.global(theme)} />
      <Header />
      <Box variant='layout.body'>{children}</Box>
      <Footer />
    </Flex>
  </pageContextProvider.Provider>
)

export default Layout
