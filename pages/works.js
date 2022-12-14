import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { WorkGridItem } from '../components/grid_item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbDeathAudio from '../public/images/death_audio.jpg'
import thumbMusicLab from '../public/images/music_lab.jpg'
import thumbRockerHub from '../public/images/rocker_lab.png'
import thumbSAUI from '../public/images/sa_ui.jpg'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="SA_UI"
              title="Smart Accessibility UI Tool"
              thumbnail={thumbSAUI}
            >
              Smart Accesibility UI Tool that learns from user habits to provide
              an easier web experience.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="music-lab"
              title="Music Lab"
              thumbnail={thumbMusicLab}
            >
              Web app that uses Audio API to experiment with different sound
              modules, and record your sessions.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="rocker-hub"
              title="Rocker's Hub"
              thumbnail={thumbRockerHub}
            >
              Placeholder web app. Will amaze you soon enough.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="death-audio"
              title="Death Audio"
              thumbnail={thumbDeathAudio}
            >
              A place where you can create your own spirit audio profile.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="death-audio-1"
              title="Death Audio"
              thumbnail={thumbDeathAudio}
            >
              A place where you can create your own spirit audio profile.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="music-lab-1"
              title="Music Lab"
              thumbnail={thumbMusicLab}
            >
              Web app that uses Audio API to experiment with different sound
              modules, and record your sessions.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="SA_UI-1"
              title="Smart Accessibility UI Tool"
              thumbnail={thumbSAUI}
            >
              Smart Accesibility UI Tool that learns from user habits to provide
              an easier web experience.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
          <WorkGridItem
              id="rocker-hub-1"
              title="Rocker's Hub"
              thumbnail={thumbRockerHub}
            >
              Placeholder web app. Will amaze you soon enough.
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
          <WorkGridItem
              id="death-audio-2"
              title="Death Audio"
              thumbnail={thumbDeathAudio}
            >
              A place where you can create your own spirit audio profile.
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
          <WorkGridItem
              id="death-audio-3"
              title="Death Audio"
              thumbnail={thumbDeathAudio}
            >
              A place where you can create your own spirit audio profile.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra'
