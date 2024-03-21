import React from 'react';
import './Food.scss';
import Item from '../Item/Item';

export default function Food() {
  return (
    <div className='food'>
        <div className="foodContainer">
        <Item />
        </div>
    </div>
  );
}
