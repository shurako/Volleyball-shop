import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";
import { SliderData } from "./SliderData";
import { useSpring, a, animated, config } from "react-spring";
import NavDots from "./NavDots";

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [renderText, setRenderText] = useState(true)
  const [zoom, setZoom] = useState(true)
  let tempState = current;
  const myRef = useRef(null)
  const [autoplay, setAutoplay] = useState(false);
  
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const slideSelect = () => {
    console.log(current);
  };

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
    tempState++;
    console.log(tempState)
  };

  useEffect(() => {
    setRenderText(true);
    setTimeout(() => {
      current == tempState ? nextSlide() : console.log("dupa");
    }, 8000);

    
    console.log(myRef)
    
    console.log(renderText)
  }, [current]);


 
////////////////////////////////////////////////////////// *ANIMATIONS*

//Transform Animation
  const transformAnimation = useSpring({
    transform: `translateX(${-current * 100}%`,
   
  });
//Scale animation
  const scaleAnimation = useSpring({
    transform: 'scale(1.1)',
  })
// Text animation
const textAnimation = useSpring({
  to: { opacity: 1, x: 300 }, from: { opacity: 0, x:0 },
  config : {duration : 3000}
})

  /////////////////////////////////////////////////////////////
  return (
    <div>
      <div className={"ImageSlider"}>
        {SliderData.map((slide) => {
          return (
            <animated.div 
              className={"image__wrapper"}
              style={transformAnimation}
            >
              <div
                
                className={"slide"}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
               <animated.h3 style = {textAnimation ? textAnimation : ''}>Lorem Ipsum</animated.h3>
                
              
              </div>
            </animated.div>
          );
        })}
        {/* <NavDots current = {current} setCurrent = {setCurrent} tempState = {tempState} /> */}
        <div className={"nav-dots"}>
          {" "}
          {SliderData.map((dot) => {
            return (
              <a.div
                style={
                  current == SliderData.indexOf(dot)
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "transparent" }
                }
                onClick={() => {
                  setCurrent(SliderData.indexOf(dot));
                  tempState = SliderData.indexOf(dot);
                }}
                className={""}
              ></a.div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => {
          nextSlide();
        }}
      >
        next
      </button>
    </div>
  );
}

export default ImageSlider;
