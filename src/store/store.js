import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../favorites/store/favoritesSlice";

export default configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
});
