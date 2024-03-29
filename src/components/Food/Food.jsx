import React from 'react';
import './Food.scss';
import ItemList from '../ItemList/ItemList';

export default function Food({ data, onClick }) {
  return (
    <div className='food'>
        <div className="foodContainer">
        <ItemList data={data} onClick={onClick} />
        </div>
    </div>
  );
}
