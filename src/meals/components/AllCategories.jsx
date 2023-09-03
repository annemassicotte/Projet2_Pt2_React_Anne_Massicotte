import MealService from "../service/MealService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const mealService = new MealService();

const AllCategories = () => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["categories"],
		queryFn: () => mealService.getAllCategories(),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<>
			<h1>Categories</h1>
			<div>
				{data && data.categories.map((category) => (
					<Link to={`/category/${category.strCategory}`} key={category.idCategory}>
						<p>{category.strCategory}</p>
					</Link>
				))}
			</div>
		</>
	);
};

export default AllCategories;
