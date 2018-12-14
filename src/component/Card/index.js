import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div class="card" className="card">
      <div className="img-container">
        <img onClick={() => props.handleClick(props.id, props.clicked)} clicked={props.clicked} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;