import React, { useState } from "react";
import { IIngridient, IReturnUseIngridient } from "../types";
import { createIngridient } from "@/actions/ingridient";

const defaultState = {
	name: "",
	category: "",
	unit: "",
	pricePerUnit: null,
	description: "",
} as const;

const useIngridientForm = (): IReturnUseIngridient => {
	const [ingridient, setIngridient] = useState<IIngridient>(defaultState);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (formData: FormData) => {
		const result = await createIngridient(formData);

		if (result?.error) {
			setError(result.error);
		} else {
			setError(null);
		}

		setIngridient(defaultState);
	};

	return {
    error,
		ingridient,
		setIngridient,
		handleSubmit,
	};
};

export default useIngridientForm;
