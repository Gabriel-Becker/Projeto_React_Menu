import React from 'react';
import MenuSanduiche from './Components/MenuSanduiche';
import './Components/MenuSanduiche.css'

function App() {
  const menuItems = [
    { text: 'Home', url: '/home' },
    { text: 'Sobre', url: '/sobre' },
    { text: 'Contato', url: '/contato' },
  ];

  return (
    <div className="App">
      <MenuSanduiche items={menuItems} />
    </div>
  );
}

export default App;
