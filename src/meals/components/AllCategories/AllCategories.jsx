import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import CategoriesService from "../../services/CategoriesService";

const categoriesService = new CategoriesService();

const AllCategories = () => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["categories"],
		queryFn: () => categoriesService.getAllCategories(),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<Container className="d-flex flex-column justify-content-center container">
			<Row>
				<Stack direction="horizontal" gap={3} className="mb-5">
					<h1 className="fw-bold">What do you want to eat?</h1>
					<Link to="/favorites">
						<Button variant="dark">Browse your favorite meals</Button>
					</Link>
				</Stack>
			</Row>
			<Row className="bg-white p-3 rounded-4">
				<Col className="px-0">
					<h2 className="mb-4 fw-bold">Categories</h2>
					<ul>
						{data &&
							data.categories.map((category) => (
								<li className="fs-4" key={category.idCategory}>
									<Link to={`/category/${category.strCategory}`}>
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
