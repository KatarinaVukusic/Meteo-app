import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./SearchBar.css";
import Weather from "./Weather";
import { Link } from "react-router-dom";

const Favourites = ({ value, addToFavourites, removeFromFavourites }) => {
  const favourite = value.favourite;
  const [fetchedData, setFetchedData] = useState();

  const fetchData = () => {
    return (
      <div>
        <Weather value={value} />
      </div>
    );
  };
  console.log(fetchedData);

  /* if (favourite===false) { 
    return (
      <div className="row">     
         <Link to={{ pathname: "/Weather", state: value}} className='dataItem' >{value.city}</Link>
        <button onClick={addToFavourites}><StarBorderIcon /></button>
        </div>
    );
  }
  else if(favourite===true){
    return (
      <div className="row">
     <button className="dataItem" onClick={fetchData}>{value.city}</button>  
   <button onClick={removeFromFavourites}><StarIcon /></button> 
   </div>
    );
  } */

  return (
    <div className="row">
      {!favourite ? (
        <>
          <Link
            to={{ pathname: "/Weather/1" }}
            className="dataItem"
            state = "haha"
          >
            {value.city}
          </Link>
          <button onClick={addToFavourites}>
            <StarBorderIcon />
          </button>
        </>
      ) : (
        <>
          <button className="dataItem" onClick={fetchData}>
            {value.city}
          </button>
          <button onClick={removeFromFavourites}>
            <StarIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default Favourites;
