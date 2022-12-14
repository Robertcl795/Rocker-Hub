import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelRobot from '../voxel_robot'
import NoSSR from '../no_ssr'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Robert Rocker - Homepage</title>
        </Head>
        <Navbar path={router.asPath}></Navbar>
        <Container maxW='container.md' pt={14}>
          <NoSSR>
            <VoxelRobot />
          </NoSSR>
            { children }
        </Container>
    </Box>
  )
}

export default Main
