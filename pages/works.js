import { Container, Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbDeathAudio from '../public/images/death_audio.jpg'
import thumbMusicLab from '../public/images/music_lab.jpg'
import thumbRockerHub from '../public/images/rocker_lab.png'
import thumbSAUI from '../public/images/sa_ui.jpg'

const Works = () => {
  return (
      <Container>
    <Layout>
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
          <Section>
            <WorkGridItem
              id="rocker-hub"
              title="Rocker's Hub"
              thumbnail={thumbRockerHub}
            >
              Placeholder web app. Will amaze you soon enough.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="death-audio"
              title="Death Audio"
              thumbnail={thumbDeathAudio}
            >
              A place where you can create your own spirit audio profile.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
    </Layout>
      </Container>
  )
}
export default Works
