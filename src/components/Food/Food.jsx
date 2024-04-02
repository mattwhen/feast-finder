import React from 'react';
import './Food.scss';
import CardContainer from '../CardContainer/CardContainer';

export default function Food({ data, onClick }) {
	return (
		<div className='food'>
			<div className='foodContainer'>
				<CardContainer data={data} onClick={onClick} />
			</div>
		</div>
	);
}
