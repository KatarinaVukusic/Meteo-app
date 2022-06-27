import React, {useState } from "react";
import "./SearchBar.css";

const DisplayFavourites = ({data}) => {
  const [sortArr,setSort]=useState(false);


 const sortArray = ()=>{
     if(sortArr===false){
        data.sort((a, b) => b.city.localeCompare(a.city))
        setSort(true)
     }else{
        data.sort((a, b) => a.city.localeCompare(b.city))
        setSort(false)
     }
 }


 return(  
    <div className="column1">
        <h3 className="title">Favoriti</h3>
        <button onClick={sortArray}>{sortArr ? "Sortiraj uzlazno": "Sortiraj silazno"}
        </button>
        {data.map((o) => {
        return(
            <div>
                <a className="dataItem" href={`https://api.open-meteo.com/v1/forecast?latitude=${o.lat}&longitude=${o.lng}&hourly=temperature_2m&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=1`} target="_blank">{o.city}</a>
              
            </div>
        )
    })}
    </div>
   
 )
}

export default DisplayFavourites;

