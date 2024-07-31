import { Container, Filters, Title, TopBar } from '@/components/common'
import ProductGroupList from '@/components/common/product-group-list'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductGroupList
								title='Pizzas'
								items={[
									{
										id: 1,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 2,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 3,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 4,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									}
								]}
								categoryId={1}
							/>

							<ProductGroupList
								title='Kombo'
								items={[
									{
										id: 1,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 2,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 3,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									},
									{
										id: 4,
										name: 'Cheeseburger-pizza',
										price: 550,
										items: [{ price: 550 }]
									}
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
