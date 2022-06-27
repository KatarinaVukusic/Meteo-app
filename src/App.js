import './App.css';
import React from 'react';
import SearchBar from "./components/SearchBar"
import Data from './gradovi.json';

function App() {
  return (
  <div>
    <h2>Meteo-app</h2>
    <div className='search'>
      <SearchBar placeholder="Unesite grad.." data={Data} />
    </div>

  </div>
 

  );
}

export default App;
