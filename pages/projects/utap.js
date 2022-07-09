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
	Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
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

		{/* <UnorderedList ml={4} my={4}>
		  <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
		  <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
		  <ListItem>
			簡単接続機能により、面倒な接続作業を自動で行います。
		  </ListItem>
		  <ListItem>
			一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
		  </ListItem>
		  <ListItem>
			IM機能を装備しています。会話中に写真を表示したりもできます。
		  </ListItem>
		  <ListItem>
			ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
		  </ListItem>
		  <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
		  <ListItem>
			画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
		  </ListItem>
		</UnorderedList> */}
  
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
  