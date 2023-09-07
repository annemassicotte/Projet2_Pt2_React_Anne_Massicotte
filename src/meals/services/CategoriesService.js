import config from "../../config";

class CategoriesService {
	baseUrl = config.baseUrl;
	endpointCategories = "categories.php";

	async getAllCategories() {
		const url = `${this.baseUrl}${this.endpointCategories}`;
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}
}

export default CategoriesService;
