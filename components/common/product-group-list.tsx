'use client'

import React, { useEffect, useRef } from 'react'
import { Title } from '@/components/common/title'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/common/product-card'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface Props {
	title
	items: any[]
	categoryId: number
	listClassName?: string
	className?: string
}

const ProductGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	listClassName,
	className
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])
	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
						ingredients={product.ingredients}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductGroupList
