import { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Food from './components/Food/Food';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import { randomRecipe, getIngredients } from './services/api';

function App() {
	const [allFood, setAllFood] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [randomData, setRandomData] = useState(null);

	const getRandom = async () => {
		const recipes = await randomRecipe();
		setRandomData(recipes);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('On Submit: ' + allFood);
	};

	return (
		<div className='App'>
			<Navbar
				text={allFood}
				setText={setAllFood}
				randomData={randomData}
				setRandomData={setRandomData}
			/>
			{/* Pass props for Ingredients to the Header component */}
			<Header text={ingredients} setText={setIngredients} randomData={randomData} setRandomData={setRandomData} />
			<div>
				<Food data={randomData} onClick={getRandom} />
			</div>
		</div>
	);
}

export default App;
