export interface IIngredient {
	name: string;
	category: string;
	unit: string;
	pricePerUnit: null | number;
	description: string;
}

export interface IReturnUseIngridient {
	error: string | null;
	ingridient: IIngredient;
	setIngridient: React.Dispatch<React.SetStateAction<IIngredient>>;
	isPending: boolean;
	handleSubmit: (formData: FormData) => Promise<void>;
}

export interface IDbIngredient {
	id: string;
	name: string;
	category: string;
	unit: string;
	pricePerUnit: null | number;
	description: string | null;
	createdAt?: Date;
	updatedAt?: Date;
}
