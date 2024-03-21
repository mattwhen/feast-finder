import { useState } from 'react';
import SearchBar from './SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';
import fetchData from '../services/api';

export default function Navbar() {
	const [text, setText] = useState({
		name: 'Matt',
		hobbies: ['Video Games', 'Coding', 'Running', 'Hiking'],
		text: '',
	});
	const [data, setData] = useState("");

	function buttonClick(e) {
		e.preventDefault();
		const data = fetchData(text.text);
		setData(data);
	}

	return (
		<div className='navbar'>
			<div className='container'>
				<h1 className='title'>FeastFinder</h1>
				<SearchBar onSubmit={buttonClick} text={text} setText={setText}/>
				<AccountCircleIcon/>
			</div>
		</div>
	);
}
