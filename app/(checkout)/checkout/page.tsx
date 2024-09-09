'use client'

import {
	CheckoutCart,
	CheckoutSidebar,
	Container,
	Title,
	WhiteBlock
} from '@/shared/components/common'
import { Input, Textarea } from '@/shared/components/ui'
import { useCart } from '@/shared/hooks'

const VAT = 15
const DELIVERY_PRICE = 250

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart()

	const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice

	return (
		<Container className='mt-10'>
			<Title text='Place order' className='font-extrabold mb-8 text-[36px]' />
			<div className='flex gap-10'>
				<div className='flex flex-col gap-10 flex-1 mb-20'>
					<CheckoutCart
						items={items}
						onClickCountButton={onClickCountButton}
						removeCartItem={removeCartItem}
						loading={loading}
					/>
				</div>

				<WhiteBlock title='1.Personal data'>
					<div className='grid grid-cols-2 gap-5'>
						<Input name='firstName' className='text-base' placeholder='Name' />
						<Input name='lastName' className='text-base' placeholder='Lastname' />
						<Input name='email' className='text-base' placeholder='E-Mail' />
						<Input name='phone' className='text-base' placeholder='Phone number' />
					</div>
				</WhiteBlock>

				<WhiteBlock title='3.Delivery address'>
					<div className='flex flex-col gap-5'>
						<Input name='firstName' className='text-base' placeholder='elivery address' />
						<Textarea className='text-base' placeholder='Comments' rows={5} />
					</div>
				</WhiteBlock>

				<div className='w-[450px]'>
					<CheckoutSidebar totalAmount={totalAmount} />
				</div>
			</div>
		</Container>
	)
}
