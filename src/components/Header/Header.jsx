import SearchBar from '../SearchBar/SearchBar';
import { getIngredients } from '../../services/api';
import './Header.scss';

export default function Header({ text, setText, setRandomData }) {
	const fetchIngredients = async (e) => {
		e.preventDefault();
		const data = await getIngredients(text);
		setRandomData(data);
		console.log(data);
	};

	return (
		<div className='header'>
			<h3 className='headerTitle'>Yo, what to eat?</h3>
			{/* Search Bar for INGREDIENTS... */}
			<SearchBar
				onSubmit={fetchIngredients}
				text={text}
				setText={setText}
				placeholder={'Search ingredients'}
			/>
		</div>
	);
}
