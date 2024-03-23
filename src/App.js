import { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Food from './components/Food/Food';
import { randomRecipe } from './services/api';


function App() {
	const [data, setData] = useState(null);

	const getRandom = async () => {
		const recipes = await randomRecipe();
		setData(recipes);
	}

	return (
		<div className='App'>
			<Navbar data={data} setData={setData} />
			<h3 className='header'>Yo, what to eat?</h3>
			<div>
				<Food data={data} onClick={getRandom} />
			</div>
		</div>
	);
}

export default App;
