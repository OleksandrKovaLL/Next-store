import React from 'react'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import {
	Container,
	GroupVariants,
	ProductImage,
	Title
} from '@/components/common'

interface Props {
	className?: string
}

export default async function ProductPage({
	params: { id }
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<ProductImage imageUrl={product.imageUrl} size={40} />
				<div className='w-[490] bg-[#FCFCFC] p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>

					<p className='text-gray-400'>Lorem djggjgf</p>
					<GroupVariants
						items={[
							{
								name: 'Small',
								value: '1'
							},
							{
								name: 'Medium',
								value: '2'
							},
							{
								name: 'Large',
								value: '3'
							}
						]}
					/>
				</div>
			</div>
		</Container>
	)
}
