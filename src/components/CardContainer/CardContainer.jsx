import React from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';

export default function CardContainer({ data, onClick }) {
	return (
		<div className='itemList'>
			<div className='titleContainer'>
				<h2>Feeling indecisive? </h2>
				<h3>We got you.</h3>
				<button className='recipeRandomBtn' onClick={onClick}>
					Random
				</button>
			</div>
			{/* {data ? <Card data={data} /> : null} */}
			{data?.map(item => {
				console.log(item);
				return <Card data={item} />;
			})}
		</div>
	);
}
