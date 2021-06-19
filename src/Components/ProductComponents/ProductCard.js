import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import {useSpring, animated} from 'react-spring'


function ProductCard(props) {
  const [hover, setHover] = useState(false);
  const fadeIn = useSpring({
    from : {opacity : 0},
    to : {opacity : 1},
    reset : true
  })


  const isHovered = () => {
    console.log("hovered");
    return (
      <animated.div style = { hover ? fadeIn : ''} className={"hovered"}>
        <div>
            <div>
                <button className = {'product-btn btn-1'}>SZCZEGÓŁY</button>
                <button className = {'product-btn'}>DO KOSZYKA</button>
            </div>
            
            
        </div>
        <div className={"size-table"}>
          <div className={"item__wrapper"}>
            {props.size.map((item) => {
              return (

                <div>
                  <div className={"size-table-item"}>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </animated.div>
    );
  };

  return (
    <div
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      className={"product-card"}
    >
      <div className={"product-title"}>{props.title}</div>
      <div className={"product-photo"}>
        <img src={props.photo} />
        {hover ? isHovered() : ""}
      </div>
      <div className={"product-price"}>{props.price}</div>
    </div>
  );
}

export default ProductCard;
