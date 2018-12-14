import React from "react";
import "./style.css";

function Title(props) {
  return ( 
    <div class="jumbotron jumbotron-fluid">
     <div ><h1 className="title" class="display-4">{props.children}</h1>
     <p class="lead">Click the picture to start the Game..</p>
     </div>
  </div>);
  
  // eslint-disable-next-line no-unused-expressions
 
}

export default Title;