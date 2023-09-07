import config from "../../config";

class CategoryService {
	baseUrl = config.baseUrl;
	endpointCategory = "filter.php?c=";

	async getCategory(name) {
		const url = `${this.baseUrl}${this.endpointCategory}${name}`;
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}
}

export default CategoryService;
