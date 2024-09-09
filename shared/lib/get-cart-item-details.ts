import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { CartStateItem } from '@/shared/lib/get-cart-details'

export const getCartItemDetails = (
	ingredients: CartStateItem['ingredients'],
	pizzaType?: PizzaType,
	pizzaSize?: PizzaSize
): string => {
	const details = []

	if (pizzaSize && pizzaType) {
		const typeName = mapPizzaType[pizzaType]
		details.push(`${typeName} ${pizzaSize} sm`)
	}

	if (ingredients) {
		details.push(...ingredients?.map(ingredient => ingredient.name))
	}

	console.log(details, 'function')

	return details.join(', ')
}
