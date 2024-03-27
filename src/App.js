import React from 'react';
import './App.css';
import Productlists from './Components/Productlists'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Top 20 Products</h1>
      </header>
      <Productlists/>
    </div>
  );
}

export default App;