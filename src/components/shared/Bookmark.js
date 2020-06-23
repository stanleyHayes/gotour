import React from 'react';

function Bookmark({ place }) {
  return (
    <li className="collection-item avatar">
      <img src={place.image} alt="" className="circle" />
      <span className="title">{place.name}</span>
      <p>{place.region.name}</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">bookmark</i>
      </a>
    </li>
  );
}

export default Bookmark;
