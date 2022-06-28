import './App.css';
import React, { useState } from 'react';
import SearchBar from "./components/SearchBar"
import Data from './gradovi.json';
import "./components/SearchBar.css";
import Settings from './components/Settings';

function App() {
    const [showSet,setSet]=useState(false);


  const showSettings = () =>{
         setSet(!showSet);
  }


  if(showSet===false){
  return (
  <div>
    <h2>Meteo-app</h2>
    <button className='set' onClick={showSettings}>{!showSet ? 'Settings' : 'Return'}</button>
    <div>
      <SearchBar placeholder="Unesite grad.." data={Data} />
    </div>

  </div>
 

  );}
  else{
    return (
      <div>
          <Settings/>  
          <button className='set' onClick={showSettings}>{!showSet ? 'Settings' : 'Return'}</button>
      </div>
     
    
      );
  }
}

export default App;
