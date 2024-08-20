'use client'

import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '@/shared/components/ui'
import { ArrowRight } from 'lucide-react'
import { useCartStore } from '@/shared/store'
import { getCartItemDetails } from '@/shared/lib'
import { CartDrawerItem } from '@/shared/components/common/cart-drawer-item'

interface Props {
	className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children
}) => {
	const [
		items,
		totalAmount,
		fetchCartItems,
		updateItemQuantity,
		removeCartItem
	] = useCartStore(state => [
		state.items,
		state.totalAmount,
		state.fetchCartItems,
		state.updateItemQuantity,
		state.removeCartItem
	])

	React.useEffect(() => {
		fetchCartItems()
	}, [])

	console.log(items, 'ITEMS')

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
				<SheetHeader>
					<SheetTitle>
						В корзине <span className='font-bold'>{items.length}</span>
					</SheetTitle>
				</SheetHeader>

				<div className='-mx-6 mt-5 overflow-auto scrollbar flex-1'>
					<div className='mb-2'>
						{items.map(item => (
							<CartDrawerItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								details={
									item.pizzaSize && item.pizzaType
										? getCartItemDetails(
												item.pizzaType,
												item.pizzaSize,
												item.ingredients
											)
										: ''
								}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id, 0)}
							/>
						))}
					</div>
				</div>

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Итого
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>

							<span className='font-bold text-lg'>{totalAmount}</span>
						</div>
						<Link href='/cart'>
							<Button type='submit' className='w-full h-12 text-base'>
								Place order
								<ArrowRight className='w-5 ml-2' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
