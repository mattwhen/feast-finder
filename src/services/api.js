const apiKey = process.env.API_KEY;

const fetchData = async (query) => {
	try {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=db797c14a8f74d1486063c3da2bc19ed`
		);
		const data = await response.json();
        console.log('api call', data.results);
		return data.results;
	} catch (error) {
        console.error('Error fetching data', error);
    }
};

export default fetchData;
