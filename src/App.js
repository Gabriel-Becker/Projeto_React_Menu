import React from 'react';
import MenuHamburguer from './Components/MenuHamburguer';
import './Components/MenuHamburguer.css'

function App() {
  const menuItems = [
    { text: 'Home', url: '/home' },
    { text: 'Sobre', url: '/sobre' },
    { text: 'Contato', url: '/contato' },
  ];

  return (
    <div className="App">
      <MenuHamburguer items={menuItems} />
    </div>
  );
}

export default App;
