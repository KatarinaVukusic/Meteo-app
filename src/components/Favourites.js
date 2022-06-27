import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./SearchBar.css";

const Favourites = ({ value, addToFavourites, removeFromFavourites }) => {
  const favourite = value.favourite;
  if (favourite===false) {
    return (
      <div className="row">     
          <a className="dataItem" href={`https://api.open-meteo.com/v1/forecast?latitude=${value.lat}&longitude=${value.lng}&hourly=temperature_2m&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=1`} target="_blank">
          <p>{value.city}</p>
        </a>    
        <button onClick={addToFavourites}><StarBorderIcon /></button>
        </div>
    );
  }
  else if(favourite===true){
    return (
      <div className="row">
      <a className="dataItem" href={`https://api.open-meteo.com/v1/forecast?latitude=${value.lat}&longitude=${value.lng}&hourly=temperature_2m&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=1`} target="_blank">
      <p>{value.city}</p>
    </a>   
   <button onClick={removeFromFavourites}><StarIcon /></button> 
   </div>
    );
  }
};

export default Favourites;

