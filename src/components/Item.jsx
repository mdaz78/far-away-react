import React from 'react';

const Item = ({ item, onDeleteItem, onCheckedToggle }) => {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onCheckedToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
