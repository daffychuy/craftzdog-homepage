import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioDescription } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software developer based in Canada!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Chu
          </Heading>
          <p>Senior Software Developer @ AMD</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a passionate software developer activtely striving for innovations.
          I make software for a living and loves tinkering with homelab on a daily basis, whatever interest me I will give it a try.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
          <BioSection>
            <BioYear>2022 - Pres</BioYear>
            <BioDescription>
              Senior Software Developer @ AMD
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2021</BioYear>
            <BioDescription>
              Software Test Developer Intenship @ AMD
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2022</BioYear>
            <BioDescription>
              University of Toronto Teaching Assistant for multiple courses
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2022</BioYear>
            <BioDescription>
              Completed Bachelor of Science in Computer Science from University
              of Toronto.
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>1999</BioYear>
            <BioDescription>
              Born in Taiwan.
            </BioDescription>
          </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Guitar, Anime, Casual Games, and Creating Side Projects
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Self-Hosted @ Home
        </Heading>
        <Paragraph>
          Plex, Sonarr, Radarr, Homebridge, Proxmox, Pterodactyl, and more.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/daffychuy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
              >
                @daffychuy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/daffychuy/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoLinkedin />}
              >
                @daffychuy
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
