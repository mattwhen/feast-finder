import React from 'react';
import './Card.scss';

export default function Card({ data }) {
	const { title, image } = data;
	console.log('Card component:', title, image);

	return (
		<div className='cardContainer'>
			<h2 className='cardTitle'>{title.length > 10 ? title.slice(0, 25) + '...' : title}</h2>
			<img src={`${image}`} alt={'food'} className='cardImage'/>
		</div>
	);
}
