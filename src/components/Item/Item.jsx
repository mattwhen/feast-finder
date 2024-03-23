import React from 'react';

export default function Item({ data }) {
	return (
		<div className='itemContainer'>
			{data !== null ? (
				data.map((item) => <p>{item.title}</p>)
			) : (
				<p>No recipes at the moment.</p>
			)}
		</div>
	);
}
