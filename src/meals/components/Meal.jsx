import MealService from "../service/MealService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MealDetails from "./MealDetails";

const mealService = new MealService();

const Meal = () => {
	const params = useParams();

	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["meal", params.id],
		queryFn: () => mealService.getMeal(params.id),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<>
			<Link to="/">Back to categories</Link>
			<div>
				{data &&
					data.meals.map((info) => (
						<div key={info.idMeal}>
							<h1>{info.strMeal}</h1>
							<p>{info.strCategory}</p>
							<img src={info.strMealThumb} alt={params.name} />
						</div>
					))}
			</div>
			<MealDetails data={data} />
		</>
	);
};

export default Meal;
