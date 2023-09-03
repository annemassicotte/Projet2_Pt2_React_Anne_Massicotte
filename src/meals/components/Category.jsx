import MealService from "../service/MealService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const mealService = new MealService();

const Category = () => {
	const params = useParams();

	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["category", params.name],
		queryFn: () => mealService.getCategory(params.name),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<>
			<Link to="/">Back to categories</Link>
			<h1>{params.name}</h1>
			<div>
				{data &&
					data.meals.map((item) => (
						<Link to={`/category/${item.strMeal}`} key={item.idMeal}>
							<img src={item.strMealThumb} alt={item.strMeal} />
							<p>{item.strMeal}</p>
						</Link>
					))}
			</div>
		</>
	);
};

export default Category;
