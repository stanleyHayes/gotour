import React from 'react';
import { useHistory } from 'react-router-dom';

function TouristSite(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/sites/${props.site._id}`);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img src={props.site.image} alt="" className="responsive" />
      </div>
      <div className="card-content">
        <span className="card-title">{props.site.name}</span>
        <p>{props.site.description}</p>
      </div>
    </div>
  );
}

export default TouristSite;
