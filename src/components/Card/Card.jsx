import React from 'react';
import './Card.scss';

export default function Card({ data }) {
	const { title, image } = data;
	console.log('Card component:', title, image);

	return (
		<div className='cardContainer' style={{backgroundImage: `url(${image})`, width: 100, height: 100}}>
			<h2>{title}</h2>
		</div>
	);
}
