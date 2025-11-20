import React from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onCheckedToggle }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckedToggle={onCheckedToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
