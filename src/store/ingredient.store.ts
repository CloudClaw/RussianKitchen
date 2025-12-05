import { createIngredient, deleteIngredient, getIngredient } from "@/actions/ingridient";
import { IDbIngredient } from "@/forms/IngridientForm/types";
import { create } from "zustand";

interface IIngredientState {
	ingredients: IDbIngredient[];
	isLoading: boolean;
	error: string | null;
	loadIngredients: () => Promise<void>;
	addIngredient: (formData: FormData) => Promise<void>;
	deleteIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IIngredientState>((set) => ({
	ingredients: [],
	isLoading: false,
	error: null,
	loadIngredients: async () => {
		set({ isLoading: true, error: null });
		try {
			const result = await getIngredient();
			if (result?.success) {
				set({ ingredients: result.ingredients });
			}
		} catch (error) {
			set({ error: "Ошибка загрузки ингредиентов" });
		} finally {
			set({ isLoading: false });
		}
	},
	addIngredient: async (formData: FormData) => {
		set({ isLoading: true, error: null });

		try {
			const result = await createIngredient(formData);

			if (result?.success) {
				set((state) => ({
					ingredients: [...state.ingredients, result.ingredient],
				}));
			}
		} catch (error) {
			set({ error: "Ошибка добавления ингредиента" });
		} finally {
			set({ isLoading: false });
		}
	},
	deleteIngredient: async (id: string) => {
		set({ isLoading: true, error: null });

		try {
			const result = await deleteIngredient(id);

			if (result?.success) {
				set((state) => ({
					ingredients: state.ingredients.filter((ingredient) => {
						return ingredient.id !== id;
					}),
				}));
			}
		} catch (error) {
			set({ error: "Ошибка удаления ингредиента" });
		} finally {
			set({ isLoading: false });
		}
	},
}));
