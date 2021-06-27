import React from "react";
import './Buttons.css'

function ClearBtn(props) {
  return (
    <button onClick = {() => {props.setviewAll(true)}} className = 'btn clear'>wyczyść</button>
  );
}

export default ClearBtn;
