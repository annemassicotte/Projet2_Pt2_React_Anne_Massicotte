import CategoryService from "../../services/CategoryService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const categoryService = new CategoryService();

const Category = () => {
	const params = useParams();

	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["category", params.name],
		queryFn: () => categoryService.getCategory(params.name),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<Container className="py-5">
			<Row>
				<Col>
					<Link to="/">
						<Button variant="dark" className="mb-5">
							Back to categories
						</Button>
					</Link>
				</Col>
			</Row>

			<Row>
				<Col>
					<h1 className="mb-4 fw-bold">{params.name}</h1>
					<div className="d-flex flex-column gap-3">
						{data &&
							data.meals.map((meal) => (
								<div key={meal.idMeal} className="meal-wrapper hstack gap-3">
									<img
										src={meal.strMealThumb}
										alt={meal.strMeal}
										className="rounded-circle thumbnail"
									/>
									<Link to={`/meal/${meal.idMeal}`}>
										<p className="fs-4">{meal.strMeal}</p>
									</Link>
								</div>
							))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Category;
