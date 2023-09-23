import { useSelector } from "react-redux";
import { favoritesSelector } from "../../../favorites/store/favoritesSelectors";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoriteButton from "../../../favorites/components/FavoriteButton/FavoriteButton";

const FavoriteMeals = () => {
	const favorites = useSelector(favoritesSelector);

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
					<h1 className="mb-4 fw-bold">List of favorite meals</h1>
					<div className="d-flex flex-column gap-3">
						{favorites.map((meal) => (
							<Stack key={meal.idMeal} direction="horizontal" gap={3}>
								<img
									src={meal.strMealThumb}
									alt={meal.strMeal}
									className="rounded-circle thumbnail"
								/>
								<Link to={`/meal/${meal.idMeal}`}>
									<p className="fs-4 mb-0">{meal.strMeal}</p>
								</Link>
								<FavoriteButton meal={meal} />
							</Stack>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default FavoriteMeals;
