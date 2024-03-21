import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.scss';
import fetchData from '../../services/api';

export default function Navbar() {
	const [text, setText] = useState({
		name: 'Matt',
		hobbies: ['Video Games', 'Coding', 'Running', 'Hiking'],
		text: '',
	});
	const [data, setData] = useState('');

	async function submitForm(e) {
		e.preventDefault();
		const data = await fetchData(text.text);
		console.log(data);
		setData(data);
	}

	return (
		<div className='navbar'>
			<div className='container'>
				<h1 className='title'>FeastFinder</h1>
				<SearchBar onSubmit={submitForm} text={text} setText={setText} />
				<span className='profileIcon'>
					<AccountCircleIcon />
				</span>
			</div>
		</div>
	);
}
