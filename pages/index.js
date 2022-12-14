import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
        <Layout>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, i&apos;m a full stack developer based in Mexico!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Robert Carrillo
            </Heading>
            <p>Digital Smith (Artist / Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/rocker.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Robert is a freelance and innovation advocate, with a passion for
            building digital products that can solve real world problems, using
            modern designs and toolsets that provide solid and fresh
            experiences. Currently, working in the product called {''}
            <Link as={NextLink} href="/works/SAUI">
              Smart Accesibility UI Tool
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Nayarit, Mexico
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Started working in IBM as part of the student program
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed Communications and Electronics Engineering Bachelor
            program at Universidad de Guadalajara
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started working in Kyndryl as fullstack developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Videogames, Music, Playing piano, Cycling, Movies, Anime, Coding
          </Paragraph>
        </Section>
    </Layout>
      </Container>
  )
}

export default Page
