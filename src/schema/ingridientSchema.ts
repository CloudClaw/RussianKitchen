import { z } from "zod";

export const ingredientSchema = z.object({
	name: z.string().min(1, "Название обязательно"),
	category: z.enum(["VEGETABLES", "FRUITS", "MEAT", "DAIRY", "SPICES", "OTHER"]),
	unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
	pricePerUnit: z.number({
		error: (issue) => (typeof issue.input !== "number" ? "Цена должна быть числом" : undefined),
	})
		.min(0, "Цена должна быть положительной")
		.nullable(),
	description: z.string().optional(),
});
