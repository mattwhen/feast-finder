import Navbar from './components/NavBar/Navbar';
import './App.css';
import Food from './components/Food/Food';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<h3 className='header'>Yo, what to eat?</h3>
			<div>
				<Food />
			</div>
		</div>
	);
}

export default App;
