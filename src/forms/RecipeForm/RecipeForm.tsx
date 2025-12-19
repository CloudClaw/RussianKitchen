"use client";

import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { RecipeFormProps } from "./types";
import { useRecipeForm } from "./hooks/useRecipeForm";

const RecipeForm = ({ initialRecipe }: RecipeFormProps) => {
	const {
		handleSubmit,
		error,
		formData,
		setFormData,
		ingredientFields,
		ingredients,
		handleIngredientChange,
		handleRemoveIngredientField,
		handleAddIngredientField,
		isPending,
	} = useRecipeForm({ initialRecipe });

	return (
		<Form className="w-[450px]" action={handleSubmit}>
			{error && <p className="text-red-500 mb-4">{error}</p>}

			<Input
				isRequired
				name="name"
				placeholder="Введите название рецепта"
				type="text"
				value={formData.name}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none",
				}}
				onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				validate={(value) => (!value ? "Название обязательно" : null)}
			/>

			<Input
				name="description"
				placeholder="Введите описание (необязательно)"
				type="text"
				value={formData.description}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none",
				}}
				onChange={(e) => setFormData({ ...formData, description: e.target.value })}
			/>
			<Input
				name="imageUrl"
				placeholder="URL изображения (необязательно)"
				type="url"
				value={formData.imageUrl}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none",
				}}
				onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
			/>

			<div className="space-y-2 w-full">
				{ingredientFields.map((field, index) => (
					<div key={field.id} className="flex gap-2 items-center">
						<Select
							isRequired
							name={`ingredient_${index}`}
							placeholder="Выберите ингредиент"
							selectedKeys={field.ingredientId ? [field.ingredientId] : []}
							classNames={{
								trigger: "bg-default-100 w-full",
								innerWrapper: "text-sm",
								value: "truncate",
								selectorIcon: "text-black",
							}}
							onChange={(e) => handleIngredientChange(field.id, "ingredientId", e.target.value)}
						>
							{ingredients.map((ingredient) => (
								<SelectItem key={ingredient.id} className="text-black">
									{ingredient.name}
								</SelectItem>
							))}
						</Select>
						<Input
							isRequired
							name={`quantity_${index}`}
							placeholder="Количество"
							type="number"
							value={field.quantity !== null ? field.quantity.toString() : ""}
							classNames={{
								inputWrapper: "bg-default-100 w-full",
								input: "text-sm focus:outline-none",
							}}
							className="w-[100px]"
							onChange={(e) =>
								handleIngredientChange(
									field.id,
									"quantity",
									e.target.value ? parseFloat(e.target.value) : null
								)
							}
							validate={(value) =>
								!value || parseFloat(value) <= 0 ? "Количество должно быть больше 0" : null
							}
						/>
						{ingredientFields.length > 1 && (
							<Button
								color="danger"
								variant="light"
								onPress={() => handleRemoveIngredientField(field.id)}
								className="w-[50px]"
							>
								-
							</Button>
						)}
					</div>
				))}

				{ingredientFields.length < 10 && (
					<Button color="primary" variant="flat" onPress={handleAddIngredientField}>
						+
					</Button>
				)}
			</div>

			<div className="flex w-full items-center justify-end mt-4">
				<Button color="primary" type="submit" isLoading={isPending}>
					{initialRecipe ? "Сохранить изменения" : "Добавить рецепт"}
				</Button>
			</div>
		</Form>
	);
};

export default RecipeForm;
