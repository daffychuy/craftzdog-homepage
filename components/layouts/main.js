import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCharmanderLoader from '../voxel-charmander-loader'

const LazyVoxelCharmander = dynamic(() => import('../voxel-charmander'), {
  ssr: false,
  loading: () => <VoxelCharmanderLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daniel's homepage" />
        <meta name="author" content="Daniel Chu" />
        <meta name="author" content="daffychuy" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Daniel Chu" />
        <meta name="og:title" content="Daniel Chu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://daffychuy.com/card.png" />
        <title>Daniel Chu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCharmander />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
