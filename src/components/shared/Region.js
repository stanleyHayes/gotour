import React from 'react';
import { useHistory } from 'react-router-dom';
function Region(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/regions/${props.region._id}`);
  }
  return (
    <div className="card meduim" onClick={handleClick}>
      <div className="card-image">
        <img src={props.region.image} alt="" />
        <span className="card-title">{props.region.name}</span>
      </div>
      <div className="card-content">
        <p>{props.region.description}</p>
      </div>
    </div>
  );
}

export default Region;
