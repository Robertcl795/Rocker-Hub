import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
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
        <Paragraph>Robert is a freelance and innovation advocate, with a passion for building digital products that can solve real world problems, using modern designs and toolsets that provide solid and fresh experiences. Currently, working in the product called {''}
        <Link as={NextLink} href="/works/SAUI">Smart Accesibility UI Tool</Link>
        </Paragraph>
        
      </Section>
    </Container>
  )
}

export default Page
