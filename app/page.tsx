import { Container, Title, TopBar } from '@/components/common'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
		</>
	)
}
