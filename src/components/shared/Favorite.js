import React from 'react';

function Favorite(props) {
  return (
    <li className="collection-item avatar">
      <img src={props.favorite.image} alt="" className="circle" />
      <span className="title">{props.favorite.name}</span>
      <p>{props.favorite.region.name}</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </li>
  );
}

export default Favorite;
