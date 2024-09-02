'use client'

import React from 'react'
import { useCartStore } from '@/shared/store'
import toast from 'react-hot-toast'
import { ProductWithRelations } from '@/@types/prisma'
import { ChoosePizzaForm } from '@/shared/components/common/choose-pizza-from'
import { ChooseProductForm } from '@/shared/components/common/choose-product-form'

interface Props {
	product: ProductWithRelations
	onSubmit?: VoidFunction
}

export const ProductForm: React.FC<Props> = ({
	product,
	onSubmit: _onSubmit
}) => {
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading
	])

	const firstItem = product.items[0]
	const isPizzaFrom = Boolean(product.items[0].pizzaType)

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id

			await addCartItem({
				productItemId: itemId,
				ingredients
			})
			toast.success('Pizza successfully added to cart')

			_onSubmit?.()
		} catch (err) {
			toast.error('Failed to add pizza to cart')
			console.error(err)
		}
	}
	if (isPizzaFrom) {
		return (
			<ChoosePizzaForm
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				items={product.items}
				onSubmit={onSubmit}
				loading={loading}
			/>
		)
	}

	return (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			onSubmit={onSubmit}
			price={firstItem.price}
			loading={loading}
		/>
	)
}
