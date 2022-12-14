import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelRobotLoader from '../voxel_robot_loader'

const LazyVoxelRobot = dynamic(() => import('../voxel_robot'), {
  ssr: false,
  loading: () => <VoxelRobotLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Robert Rocker - Homepage</title>
        </Head>
        <Navbar path={router.asPath}></Navbar>
        <Container maxW='container.md' pt={14}>
            <LazyVoxelRobot />
            { children }
        </Container>
    </Box>
  )
}

export default Main
