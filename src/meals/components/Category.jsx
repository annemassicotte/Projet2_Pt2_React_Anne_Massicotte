import MealService from "../service/MealService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
		<Container className="py-5">
			<Link to="/">
				<Button variant="dark" className="mb-5">
					Back to categories
				</Button>
			</Link>
			<h1 className="mb-4 fw-bold">{params.name}</h1>
			<div className="d-flex flex-column gap-3">
				{data &&
					data.meals.map((meal) => (
						<div key={meal.idMeal} className="meal-wrapper hstack gap-3">
							<img
								src={meal.strMealThumb}
								alt={meal.strMeal}
								className="rounded-circle"
							/>
							<Link to={`/meal/${meal.idMeal}`}>
								<p className="fs-4">{meal.strMeal}</p>
							</Link>
						</div>
					))}
			</div>
		</Container>
	);
};

export default Category;
