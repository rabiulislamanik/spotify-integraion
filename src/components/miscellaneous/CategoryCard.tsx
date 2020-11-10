import React from "react";
import { ICategoryItem } from '../../custom-types/spotifyreponse';

interface ICategoryCard{
    category:ICategoryItem
}

function CategoryCard (props:ICategoryCard){
  return (
    <div className="card">
      <img className="card-image" src={props.category.icons[0].url} alt="icon" height="256" width="256"/>
      <p>{props.category.name}</p>
    </div>
  );
}

export default CategoryCard;