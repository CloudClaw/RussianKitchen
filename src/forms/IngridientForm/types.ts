export interface IIngridient {
	name: string;
	category: string;
	unit: string;
	pricePerUnit: null | number;
	description: string;
}

export interface IReturnUseIngridient {
	error: string | null;
	ingridient: IIngridient;
	setIngridient: React.Dispatch<React.SetStateAction<IIngridient>>;
	handleSubmit: (formData: FormData) => Promise<void>;
}
