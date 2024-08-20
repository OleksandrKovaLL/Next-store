import React from 'react'

import { Category } from '@prisma/client'
import { Categories } from '@/shared/components/common/categories'
import { SortPopup } from '@/shared/components/common/sort-popup'
import { Container } from '@/shared/components/common/container'
import { cn } from '@/shared/lib/utils'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex items-center justify-between '>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
