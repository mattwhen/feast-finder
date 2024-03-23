import './SearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSubmit, text, setText }) {


	return (
		<div className='searchbar'>
			<form onSubmit={onSubmit}>
				<div className='fieldContainer'>
					{/* To change the values in the form, we need to update the value of the state. */}
					{/* The onChange function is called anytime the value changes. But we need the previous values otherwise we just override the state. 
				so we copy the previous values by using the spread (...) operator. */}
					<input
						type='text'
						placeholder='Enter keyword to search'
						value={text.text}
						onChange={(e) => setText({ ...text, text: e.target.value })}
					/>
					<button className='searchIcon' onClick={onSubmit}>
						<SearchIcon />
					</button>
				</div>
			</form>
		</div>
	);
}
