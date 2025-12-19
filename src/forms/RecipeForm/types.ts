import { IRecipe } from "@/globalTypes";

export interface RecipeFormProps {
  initialRecipe?: IRecipe;
}

export interface IIngredientField {
  id: number;
  ingredientId: string;
  quantity: number | null;
}

export const initialState = {
  name: "",
  description: "",
  imageUrl: ""
} as const;