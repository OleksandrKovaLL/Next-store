import React from 'react'
import { Title } from '@/components/common/title'
import { FilterCheckbox } from '@/components/common/filter-checkbox'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/common/range-slider'
import { CheckboxFilterGroup } from '@/components/common/checkbox-filters-group'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Filter' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Can be collected' value='1' />
				<FilterCheckbox text='New items' value='2' />
			</div>
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Prices from and to:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={1000} />
					<Input type='number' min={100} max={1000} placeholder='1000' />
				</div>
				<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
			</div>
			<CheckboxFilterGroup
				title='Ingridients'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					}
				]}
				items={[
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Cheese grave',
						value: '1'
					},
					{
						text: 'Test',
						value: '1'
					}
				]}
			/>
		</div>
	)
}
