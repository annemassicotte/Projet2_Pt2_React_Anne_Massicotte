import Accordeon from "../../components/Accordeon";

const MealDetails = ({ data }) => {
	
	if (!data) {
		return null;
	}

	const meal = data.meals[0];
	const ingredientsAndMeasures = [];

	for (let i = 1; i <= 20; i++) {
		const ingredient = meal[`strIngredient${i}`];
		const measure = meal[`strMeasure${i}`];

		if (ingredient && measure) {
			ingredientsAndMeasures.push(`${measure} ${ingredient}`);
		}
	}

	const filteredIngredientsAndMeasures = ingredientsAndMeasures.filter(Boolean);
	
	const ingredientList = (
		<ul>
			{filteredIngredientsAndMeasures.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
	
	const instructions = meal.strInstructions;

	return (
		<div>
			<Accordeon
				titleOne="Ingredients"
				descriptionOne={ingredientList}
				titleTwo="Instructions"
				descriptionTwo={instructions}
			/>
		</div>
	);
};

export default MealDetails;
