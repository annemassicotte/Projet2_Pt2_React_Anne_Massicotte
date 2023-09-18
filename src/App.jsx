import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllCategories from "./meals/components/AllCategories/AllCategories";
import Category from "./meals/components/Category/Category";
import Meal from "./meals/components/Meal/Meal";
import FavoriteMeals from "./meals/components/Meal/FavoriteMeals";

const client = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={client}>
			<Routes>
				<Route path="/" element={<AllCategories />} />
				<Route path="/category/:name" element={<Category />} />
				<Route path="/meal/:id" element={<Meal />} />
				<Route path="/favorites" element={<FavoriteMeals />} />
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
