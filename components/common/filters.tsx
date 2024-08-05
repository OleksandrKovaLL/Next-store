'use client'

import React from 'react'
import { Title } from '@/components/common/title'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/common/range-slider'
import { CheckboxFilterGroup } from '@/components/common/checkbox-filters-group'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()

	console.log(filters.selectedIngredients)

	useQueryFilters(filters)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	return (
		<div className={className}>
			<Title text='Filter' size='sm' className='mb-5 font-bold' />

			<CheckboxFilterGroup
				title='Type of dough'
				name='pizzaTypes'
				className='mb-5'
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Thin', value: '1' },
					{ text: 'Traditional', value: '2' }
				]}
			/>
			<CheckboxFilterGroup
				title='Sizes'
				name='sizes'
				className='mb-5'
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				items={[
					{ text: '20sm', value: '20' },
					{ text: '30sm', value: '30' },
					{ text: '40sm', value: '40' }
				]}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Prices from and to:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						min={100}
						max={1000}
						placeholder='1000'
						value={String(filters.prices.priceTo)}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000
					]}
					onValueChange={updatePrices}
				/>
			</div>
			<CheckboxFilterGroup
				loading={loading}
				title='Ingridients'
				name='ingridients'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	)
}
