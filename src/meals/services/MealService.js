import config from "../../config";

class MealService {
	baseUrl = config.baseUrl;
	endpointMeal = "lookup.php?i=";

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
