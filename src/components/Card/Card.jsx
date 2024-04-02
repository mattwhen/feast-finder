import React from 'react';
import './Card.scss';

export default function Card({ data }) {
	return (
		<div className='cardContainer'>
			{data.map((item) => (
				<p className='card' key={item.id}>
					{item.title || item.name}
				</p>
			))}
		</div>
	);
}
