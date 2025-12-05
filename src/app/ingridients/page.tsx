"use client";

import IngredientsTable from "@/components/ui/Tables/Ingredients";
import IngridientForm from "@/forms/IngridientForm/IngridientForm";

const Ingridients = () => {
	return (
		<div>
			<IngridientForm />
			<IngredientsTable />
		</div>
	);
};

export default Ingridients;
