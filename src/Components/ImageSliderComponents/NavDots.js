import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import { SliderData } from "./SliderData";
import { useSpring, a, animated, config } from "react-spring";

function NavDots(props) {
  return (
    <div className={"nav-dots"}>
      {" "}
      {SliderData.map((dot) => {
        return (
          <a.div
            style={
              props.current == SliderData.indexOf(dot)
                ? { backgroundColor: "red" }
                : { backgroundColor: "transparent" }
            }
            onClick={() => {
              props.setCurrent(SliderData.indexOf(dot));
              props.tempState = SliderData.indexOf(dot);
              console.log(props.tempState)
            }}
            className={""}
          ></a.div>
        );
      })}
    </div>
  );
}

export default NavDots;
