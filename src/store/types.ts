import { IRecipe } from "@/globalTypes";

export type TSessionStatus = "authenticated" | "unauthenticated" | "loading";

export interface IActionResult {
  success: boolean;
  recipe?: IRecipe;
  error?: string;
}

export interface IRecipeState {
  recipes: IRecipe[];
  isLoading: boolean;
  error: string | null;
  loadRecipes: () => Promise<void>;
  addRecipe: (formData: FormData) => Promise<IActionResult>;
  updateRecipe: (id: string, formData: FormData) => Promise<IActionResult>;
  removeRecipe: (id: string) => Promise<void>;
}