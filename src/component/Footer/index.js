import React from "react";
import "./style.css";

function Footer(props) {
  return ( 
    <div class="jumbotron jumbotron-fluid">
      <div class="container"><h1 className="footer" class="display-4">{props.children}</h1>     
      <p class="lead">Copyright (c) 2018 Sharvari Sangle <a href="https://github.com/sangl003/ClickyGame">Github </a></p>
     </div>
  </div>);
  
  // eslint-disable-next-line no-unused-expressions
 
}

export default Footer;