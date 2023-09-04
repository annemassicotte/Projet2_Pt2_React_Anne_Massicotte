import MealService from "../service/MealService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const mealService = new MealService();

const AllCategories = () => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["categories"],
		queryFn: () => mealService.getAllCategories(),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<Container className="d-flex flex-column justify-content-center container">
			<Row className="bg-white p-3 rounded-4">
				<Col className="px-0">
					<h1 className="mb-4 fw-bold">Categories</h1>
					<ul>
						{data &&
							data.categories.map((category) => (
								<li className="fs-4">
									<Link
										to={`/category/${category.strCategory}`}
										key={category.idCategory}>
										{category.strCategory}
									</Link>
								</li>
							))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default AllCategories;
