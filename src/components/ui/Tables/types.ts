import { IDbIngredient } from "@/forms/IngridientForm/types";

export interface IUseTableIngredientsReturn {
	ingredients: IDbIngredient[];
	isAuth: boolean;
    isLoading: boolean;
	handleDelete: (id: string) => Promise<void>;
	getCategoryLabel: (value: string) => string;
	getUnitLabel: (value: string) => string;
}
