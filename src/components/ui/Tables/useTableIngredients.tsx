import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select-options";
import { useAuthStore } from "@/store/auth.store";
import { useIngredientStore } from "@/store/ingredient.store";
import { IUseTableIngredientsReturn } from "./types";

export const useTableIngredients = (): IUseTableIngredientsReturn => {
	const { ingredients, deleteIngredient, isLoading } = useIngredientStore();
	const { isAuth } = useAuthStore();

	const handleDelete = async (id: string) => {
		await deleteIngredient(id);
	};

	const getCategoryLabel = (value: string) => {
		const option = CATEGORY_OPTIONS.find((opt) => opt.value === value);
		return option ? option.label : value;
	};

	const getUnitLabel = (value: string) => {
		const option = UNIT_OPTIONS.find((opt) => opt.value === value);
		return option ? option.label : value;
	};

	return {
        ingredients,
        isAuth,
        isLoading,
        handleDelete,
        getCategoryLabel,
        getUnitLabel,
    };
};
