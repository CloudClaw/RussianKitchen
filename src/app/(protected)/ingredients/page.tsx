"use client";

import IngredientsTable from "@/components/ui/Tables/Ingredients";
import IngredientForm from "@/forms/IngridientForm/IngridientForm";

const Ingridients = () => {
	return (
		<div>
			<IngredientForm />
			<IngredientsTable />
		</div>
	);
};

export default Ingridients;
