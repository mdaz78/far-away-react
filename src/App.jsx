import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 3, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((prevState) => [...prevState, item]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
