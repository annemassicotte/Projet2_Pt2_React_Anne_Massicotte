import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from "../favorites/store/favoritesSlice";

export default configureStore({
	reducer: {
		favorites: favoritesReducers,
	},
});
