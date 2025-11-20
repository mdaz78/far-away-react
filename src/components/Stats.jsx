import React from 'react';

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPacked / numberOfItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go 🛫'
          : `You have ${numberOfItems} items on your list, and you already packed ${numberOfPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
