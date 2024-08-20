import React from 'react'
import { Ingredient, ProductItem } from '@prisma/client'

import { cn } from '@/shared/lib/utils'
import { GroupVariants } from '@/shared/components/common/group-variants'
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { Title } from '@/shared/components/common/title'
import { Button } from '@/shared/components/ui'
import { PizzaImage } from '@/shared/components/common/pizza-image'
import { IngredientItem } from '@/shared/components/common/ingredient-item'
import { usePizzaOptions } from '@/shared/hooks/use-pizza-options'
import { getPizzaDetails } from '@/shared/lib'

interface Props {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	className?: string
	onClickAddCart?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	items,
	imageUrl,
	ingredients,
	onClickAddCart,
	className
}) => {
	const {
		size,
		type,
		selectedIngredients,
		availableSizes,
		setSize,
		setType,
		addIngredient
	} = usePizzaOptions(items)

	const { totalPrice, textDetails } = getPizzaDetails(
		items,
		size,
		type,
		ingredients,
		selectedIngredients
	)

	const handleClickAdd = () => {
		onClickAddCart?.()
		console.log({
			size,
			type,
			ingredients: selectedIngredients
		})
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<PizzaImage imageUrl={imageUrl} size={size} />
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{textDetails}</p>
				<div className='flex flex-col gap-4 mt-5'>
					<GroupVariants
						items={availableSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button
					onClick={handleClickAdd}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Add to cart {totalPrice} $
				</Button>
			</div>
		</div>
	)
}
