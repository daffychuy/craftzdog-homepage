import { Container, Heading, SimpleGrid, Divider, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbUtap from '../public/images/projects/utap/utap_frontpage.png'
import thumbBeatbot from '../public/images/projects/beatbot/saberbot_frontpage.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        
      </Box> */}

      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="utap"
            title="UTAP"
            thumbnail={thumbUtap}
          >
            A student-instructor website to apply for Teaching Assistant with 
            various features
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="beatbot"
            title="Beatbot"
            thumbnail={thumbBeatbot}
          >
            Discord BeatSaber leaderboard bot
          </ProjectGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <ProjectGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </ProjectGridItem>
        </Section> */}
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
