import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

export default function ItemList({ data, onClick }) {
	return (
		<div className='itemList'>
			<div className='titleContainer'>
				<h2>Feeling indecisive? </h2>
				<h3>We got you.</h3>
				<button className='recipeRandomBtn' onClick={onClick}>
					Random
				</button>
			</div>
			<Item data={data} />
		</div>
	);
}
