import React, { useState, useTransition } from "react";
import { IIngredient, IReturnUseIngridient } from "../types";
import { createIngredient } from "@/actions/ingridient";
import { useIngredientStore } from "@/store/ingredient.store";

const defaultState = {
	name: "",
	category: "",
	unit: "",
	pricePerUnit: null,
	description: "",
} as const;

const useIngridientForm = (): IReturnUseIngridient => {
	const { addIngredient } = useIngredientStore();

	const [isPending, startTransition] = useTransition();
	const [ingridient, setIngridient] = useState<IIngredient>(defaultState);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (formData: FormData) => {
		startTransition(async () => {
			await addIngredient(formData);
			const error = useIngredientStore.getState().error;

			if (error) {
				setError(error);
			} else {
				setError(null);
			}

			setIngridient(defaultState);
		});
	};

	return {
		error,
		ingridient,
		setIngridient,
		handleSubmit,
		isPending,
	};
};

export default useIngridientForm;
