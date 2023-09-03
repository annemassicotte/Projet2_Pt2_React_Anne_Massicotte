import config from "../../config";

class MealService {
	baseUrl = config.baseUrl;
	endpointCategories = "categories.php";
	endpointCategory = "filter.php?c=";
	endpointMeal = "lookup.php?i=";

	async getAllCategories() {
		const url = `${this.baseUrl}${this.endpointCategories}`;
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}

	async getCategory(name) {
		const url = `${this.baseUrl}${this.endpointCategory}${name}`;
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}

	async getMeal(id) {
		const url = `${this.baseUrl}${this.endpointMeal}${id}`;
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}
}

export default MealService;
