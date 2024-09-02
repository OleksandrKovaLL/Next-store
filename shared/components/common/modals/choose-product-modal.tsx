'use client'

import React from 'react'

import { cn } from '@/shared/lib/utils'

import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'
import { ProductForm } from '@/shared/components/common'
import { Dialog } from '@/shared/components/ui'
import { DialogContent } from '@/shared/components/ui/dialog'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()

	// const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
	// 	try {
	// 		const itemId = productItemId ?? firstItem.id
	//
	// 		await addCartItem({
	// 			productItemId: itemId,
	// 			ingredients
	// 		})
	// 		toast.success('Pizza successfully added to cart')
	// 		router.back()
	// 	} catch (err) {
	// 		toast.error('Failed to add pizza to cart')
	// 		console.error(err)
	// 	}
	// }

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				<ProductForm product={product} onSubmit={() => router.back()} />
			</DialogContent>
		</Dialog>
	)
}
