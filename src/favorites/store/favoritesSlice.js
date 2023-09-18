import { createSlice } from "@reduxjs/toolkit";
import reducers from "./favoritesReducer";

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: {
		favorites: [],
	},
	reducers: reducers,
});

export const {
    addFavorite,
    removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
