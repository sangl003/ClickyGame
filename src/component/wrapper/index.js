import React from "react";
import "./style.css";

function Wrapper(props) {
  return (<div class="col-12">
  <div class ="col-3" className="wrapper">{props.children}
  </div>
  </div>);
}

export default Wrapper;