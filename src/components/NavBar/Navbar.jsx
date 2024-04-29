import SearchBar from '../SearchBar/SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.scss';
import { fetchData } from '../../services/api';

export default function Navbar({ text, setText, setRandomData }) {

	async function submitForm(e) {
		e.preventDefault();
		const data = await fetchData(text);
		console.log('Submit Form ' + text);
		setText("");
		setRandomData(data);
	}

	return (
		<div className='navbar'>
			<div className='container'>
				<h1 className='title'>FeastFinder</h1>
				{/* TODO: Hide AccountCircleIcon component when max-width of screen is 425px.
				ONLY allow the SearchBar component and Logo to be rendered. */}
				<SearchBar
					onSubmit={submitForm}
					text={text}
					setText={setText}	
					placeholder={'Search all foods'}
				/>
				<span className='profileIcon'>
					<AccountCircleIcon />
				</span>
			</div>
		</div>
	);
}
