import { IIngredient } from "@/forms/IngridientForm/types";

export interface IRegistrationForm {
	email: string;
	password: string;
	confirmPassword: string;
}

export interface IRecipeIngredient {
	id: string;
	ingredientId: string;
	quantity: number;
	ingredient: IIngredient;
}

export interface IRecipe {
	id: string;
	name: string;
	description: string | null;
	ingredients: IRecipeIngredient[];
	imageUrl?: string;
}
