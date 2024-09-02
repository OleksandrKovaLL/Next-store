import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import React, { useState } from 'react'

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (value: string) => void
	setSizes: (value: string) => void
	setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	// optimisation example
	// const ingredientsParam = searchParams.get('ingredients') || '';
	// const ingredientsArray = ingredientsParam ? ingredientsParam.split(',') : [];
	// const [selectedIngredients, { toggle: toggleIngredients }] = useSet<string>(
	// 	new Set<string>(ingredientsArray)
	// );

	// Ingredients filter
	// const [selectedIngredients, { toggle: toggleIngredients }] = useSet<string>(
	// 	new Set<string>(
	// 		searchParams.has('ingredients')
	// 			? (searchParams.get('ingredients') || '')?.split(',')
	// 			: []
	// 	)
	// )

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(
			searchParams.has('ingredients')
				? (searchParams.get('ingredients') || '')?.split(',')
				: []
		)
	)
	// Sizes filter
	const [sizes, { toggle: toggleSizes }] = useSet<string>(
		new Set<string>(
			searchParams.has('sizes')
				? (searchParams.get('sizes') || '')?.split(',')
				: []
		)
	)

	// Pizza type filter
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? (searchParams.get('pizzaTypes') || '')?.split(',')
				: []
		)
	)

	// Price filter
	const [prices, setPrices] = useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	return React.useMemo(
		() => ({
			sizes,
			pizzaTypes,
			selectedIngredients,
			prices,
			setPrices: updatePrice,
			setPizzaTypes: togglePizzaTypes,
			setSizes: toggleSizes,
			setSelectedIngredients: toggleIngredients
		}),
		[sizes, pizzaTypes, selectedIngredients, prices]
	)
}
