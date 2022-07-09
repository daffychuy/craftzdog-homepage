import {
	Container,
	Badge,
	Link,
	List,
	ListItem,
	Heading,
	Center,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/project'
  import P from '../../components/paragraph'
  
  const Work = () => (
	<Layout title="utap">
	  <Container>
		<Title>
		  UTAP <Badge>2020-2022</Badge> <Badge>Active Project</Badge>
		</Title>
		<P>
			While I no longer work on the projects, it is still being continued by the student at University of Toronto Mississauga
		</P>
		<P>
		  UTAP, an application website for students at University of Toronto to apply for Teaching Assistant.
		  As well as for instructors to see applicants and approve or reject them with various features.
		</P>
  
		<List ml={4} my={4}>
		  <ListItem>
			<Meta>Stack</Meta>
			<span>NodeJS, ReactJs, Python, Java, PostgreSQL</span>
		  </ListItem>
		  <ListItem>
			<Meta>Last update</Meta>
			<span>Under active development</span>
		  </ListItem>
		  <ListItem>
			<Meta>Example</Meta>
			<Link href="https://utapcsc.utm.utoronto.ca/utap/">UTAP Computer Science</Link>
		  </ListItem>
		</List>
  
		<Heading as="h4" fontSize={16} my={6}>
		  <Center>Screenshots</Center>
		</Heading>
  

		<WorkImage src="/images/projects/utap/utap-homepage.png" alt="utap-homepage" />
		<WorkImage src="/images/projects/utap/utap-application.png" alt="utap-applications" />
	  </Container>
	</Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  