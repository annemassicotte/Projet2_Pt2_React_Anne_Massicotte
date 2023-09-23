import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { favoritesSelector } from "../../store/favoritesSelectors";
import { Stack } from "react-bootstrap";

const FavoriteButton = ({ meal }) => {
	const dispatch = useDispatch();

	const favorites = useSelector(favoritesSelector);
	const isFavorite = favorites.some(
		(favorite) => favorite.idMeal === meal.idMeal
	);

	const onClick = () => {
		if (isFavorite) {
			return dispatch(removeFavorite(meal));
		} else {
			return dispatch(addFavorite(meal));
		}
	};

	return (
		<button type="button" className="rounded px-2 py-1" onClick={onClick}>
			{isFavorite ? (
				<Stack direction="horizontal" gap={3}>
					<p className="mb-0">Remove from favorites</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="#D70040"
						stroke="#D70040"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
					</svg>
				</Stack>
			) : (
				<Stack direction="horizontal" gap={3}>
					<p className="mb-0">Add to favorites</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
					</svg>
				</Stack>
			)}
		</button>
	);
};

export default FavoriteButton;
