import { Ingredient } from '@prisma/client'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
	selectedIngredients: Set<string>
	onAddId: (id: string) => void
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {}
