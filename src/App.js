import './App.css';
import React, { useState } from 'react';
import SearchBar from "./components/SearchBar"
import Data from './gradovi.json';
import "./components/SearchBar.css";
import {
  Link
} from "react-router-dom";

const App = ( ) => {


  return (
  <div>
    <h2>Meteo-app</h2>
    <Link to="/Settings" className='set'>Settings</Link>
    <div className=''>
      <SearchBar placeholder="Unesite grad.." data={Data} />
    </div>  

  </div>


  );
}

export default App;
