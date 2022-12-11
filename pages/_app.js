import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

import React from 'react'
import theme from '../lib/theme'
import Fonts from '../components/fonts'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
