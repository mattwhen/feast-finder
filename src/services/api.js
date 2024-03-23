const API_KEY = 'db797c14a8f74d1486063c3da2bc19ed';

export const fetchData = async (query) => {
	try {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
		);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching data', error);
	}
};

export const randomRecipe = async () => {
	try {
		const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`, {
			'Content-type': 'application/json'
		});
		// Response: json() method
		// the json() method returns a Promise which resolves with the result of parsing the body: ReadableStream text as json.
		const data = await response.json();
		return data.recipes;
	} catch (error) {
		console.error('Error fetching random recipes', error);
	}
}


