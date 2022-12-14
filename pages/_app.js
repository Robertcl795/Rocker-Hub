import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

import React from 'react'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
        <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
