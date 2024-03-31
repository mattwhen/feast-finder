import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

export default function Header({ text, setText, onSubmit }) {
	return (
		<div className='header'>
			<h3 className='headerTitle'>Yo, what to eat?</h3>
			{/* Search Bar for INGREDIENTS... */}
			<SearchBar
				placeholder={'Search ingredients'}
				text={text}
				setText={setText}
				onSubmit={onSubmit}
			/>
		</div>
	);
}
