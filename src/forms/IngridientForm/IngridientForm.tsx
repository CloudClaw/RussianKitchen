"use client";

import React from "react";
import useIngredientForm from "./hooks/useIngredientForm";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select-options";

const IngredientForm = () => {
	const { error, ingridient, setIngridient, handleSubmit, isPending } = useIngredientForm();

	return (
		<Form className="w-full" action={handleSubmit}>
			{error && <p className="text-red-500 mb-4">{error}</p>}

			<Input
				isRequired
				name="name"
				placeholder="Введите название ингредиента"
				type="text"
				value={ingridient.name}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none",
				}}
				onChange={(e) => setIngridient({ ...ingridient, name: e.target.value })}
				validate={(value) => {
					if (!value) return "Название обязательно";
					return null;
				}}
			/>

			<div className="flex gap-2 w-full">
				<div className="w-1/3">
					<Select
						isRequired
						name="category"
						placeholder="Категория"
						selectedKeys={ingridient.category ? [ingridient.category] : []}
						classNames={{
							trigger: "bg-default-100 w-full",
							innerWrapper: "text-sm",
							value: "truncate",
							selectorIcon: "text-black",
						}}
						onChange={(e) => setIngridient({ ...ingridient, category: e.target.value })}
					>
						{CATEGORY_OPTIONS.map((option) => (
							<SelectItem key={option.value} className="text-black">
								{option.label}
							</SelectItem>
						))}
					</Select>
				</div>
				<div className="w-1/3">
					<Select
						isRequired
						name="unit"
						placeholder="Ед. изм."
						selectedKeys={ingridient.unit ? [ingridient.unit] : []}
						classNames={{
							trigger: "bg-default-100 w-full",
							innerWrapper: "text-sm",
							value: "truncate",
							selectorIcon: "text-black",
						}}
						onChange={(e) => setIngridient({ ...ingridient, unit: e.target.value })}
					>
						{UNIT_OPTIONS.map((option) => (
							<SelectItem key={option.value} className="text-black">
								{option.label}
							</SelectItem>
						))}
					</Select>
				</div>
				<div className="w-1/3">
					<Input
						isRequired
						name="pricePerUnit"
						placeholder="Цена"
						type="number"
						value={ingridient.pricePerUnit !== null ? ingridient.pricePerUnit.toString() : ""}
						classNames={{
							inputWrapper: "bg-default-100",
							input: "text-sm focus:outline-none",
						}}
						onChange={(e) => {
							const value = e.target.value ? parseFloat(e.target.value) : null;
							setIngridient({ ...ingridient, pricePerUnit: value });
						}}
						endContent={
							<span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-default-500 pointer-events-none">
								₽
							</span>
						}
						validate={(value) => {
							if (!value) return "Цена обязательна";
							const num = parseFloat(value);
							if (isNaN(num) || num < 0) return "Цена должна быть положительной";
							return null;
						}}
					/>
				</div>
			</div>

			<Input
				name="description"
				placeholder="Введите описание (необязательно)"
				type="text"
				value={ingridient.description}
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm focus:outline-none",
				}}
				onChange={(e) => setIngridient({ ...ingridient, description: e.target.value })}
			/>

			<div className="flex w-full items-center justify-end">
				<Button color="primary" type="submit" isLoading={isPending}>
					Добавить ингредиент
				</Button>
			</div>
		</Form>
	);
};

export default IngredientForm;
