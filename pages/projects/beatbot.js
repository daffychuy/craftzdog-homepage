import {
	Container,
	Badge,
	Link,
	List,
	ListItem,
	SimpleGrid,
	UnorderedList,
	Heading,
	Center,
	Image,
	Button
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { IoLogoGithub } from 'react-icons/io5'
  import { Title, WorkImage, Meta, Meta_Orange } from '../../components/project'
  import P from '../../components/paragraph'
  
  const Work = () => (
	<Layout title="beatbot">
	  <Container>
		<Title>
		  Beatbot <Badge>2021-2022</Badge> <Badge>Active Project</Badge> 
		</Title>

		<P>
			This is a simple BeatSaber bot for Discord created for a group of friends.
		</P>

		<UnorderedList ml={4} my={4}>
		  <ListItem>Daily and Weekly Leaderboard Update from ScoreSaber</ListItem>
		  <ListItem>Linking and Unlinking users from ScoreSaber to BeatBot</ListItem>
		  <ListItem>Automatic linking of Songs from BeatSaver from Chat <Meta_Orange>WIP</Meta_Orange></ListItem>
		</UnorderedList>

		<List ml={4} my={4}>
			<ListItem>
				<Meta>Source</Meta>
				<Link href="https://github.com/daffychuy/beatbot">@daffychuy/beatbot</Link>
			</ListItem>
		  <ListItem>
			<Meta>Stack</Meta>
			<span>JavaScript, MongoDB</span>
		  </ListItem>
		  <ListItem>
			<Meta>Last update</Meta>
			<span>6/1/2022</span>
		  </ListItem>
		</List>
		
		<Heading as="h4" fontSize={16} my={6}>
		  <Center>Screenshots</Center>
		</Heading>
  

		<WorkImage src="/images/projects/beatbot/beatbot_profile.png" alt="beatbot" />
	  </Container>
	</Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  