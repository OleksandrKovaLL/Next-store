import { pizzaSizes, PizzaType } from '@/shared/constants/pizza'
import { ProductItem } from '@prisma/client'
import { Variant } from '@/shared/components/common/group-variants'

export const getAvailablePizzaSizes = (
	items: ProductItem[],
	type: PizzaType
): Variant[] => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)
	const availablePizzasSizes = pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByType.some(
			pizza => Number(pizza.size) === Number(item.value)
		)
	}))

	return availablePizzasSizes
}
