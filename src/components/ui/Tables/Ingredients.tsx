"use client";

import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useTableIngredients } from "./useTableIngredients";

const IngredientsTable = () => {
	const { ingredients, isAuth, isLoading, handleDelete, getCategoryLabel, getUnitLabel } = useTableIngredients();

	if (!isAuth) {
		return <p>Не авторизован</p>;
	}

	return !isLoading && isAuth ? (
		<Table
			aria-label="Список ингредиентов"
			classNames={{
				wrapper: "mt-4",
				table: "w-full",
				th: "text-black",
				td: "text-black",
			}}
		>
			<TableHeader>
				<TableColumn>Название</TableColumn>
				<TableColumn>Категория</TableColumn>
				<TableColumn>Ед. изм.</TableColumn>
				<TableColumn>Цена за единицу</TableColumn>
				<TableColumn>Описание</TableColumn>
				<TableColumn>Действия</TableColumn>
			</TableHeader>
			<TableBody>
				{ingredients.map((ingredient) => (
					<TableRow key={ingredient.id}>
						<TableCell>{ingredient.name}</TableCell>
						<TableCell>{getCategoryLabel(ingredient.category)}</TableCell>
						<TableCell>{getUnitLabel(ingredient.unit)}</TableCell>
						<TableCell>{ingredient.pricePerUnit !== null ? `${ingredient.pricePerUnit} ₽` : "-"}</TableCell>
						<TableCell>{ingredient.description || "-"}</TableCell>
						<TableCell>
							<Button color="danger" size="sm" onPress={() => handleDelete(ingredient.id)}>
								Удалить
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	) : (
		<p className="mt-4">Загрузка...</p>
	);
};

export default IngredientsTable;
