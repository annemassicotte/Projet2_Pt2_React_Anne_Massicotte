import MealService from "../../services/MealService";
import MealDetails from "../MealDetails/MealDetails";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

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
		<Container className="py-5 container-detailed-meal">
			<Row>
				<Col>
					<Link to="/">
						<Button variant="dark" className="mb-5">
							Back to categories
						</Button>
					</Link>
				</Col>
			</Row>

			{data &&
				data.meals.map((meal) => (
					<Row key={meal.idMeal}>
						<Col>
							<h1 className="mb-2 fw-bold text-center">{meal.strMeal}</h1>
							<p className="fs-5 mb-5 text-center">
								Category: {meal.strCategory}
							</p>
							<div className="mx-auto container-img mb-5">
								<img
									src={meal.strMealThumb}
									alt={meal.strMeal}
									className="rounded-4"
								/>
							</div>

							<MealDetails data={data} className="accordion" />
						</Col>
					</Row>
				))}
		</Container>
	);
};

export default Meal;
