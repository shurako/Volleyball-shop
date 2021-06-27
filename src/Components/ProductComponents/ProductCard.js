import React, { useState, useEffect, useRef } from "react";
import "./ProductCard.css";
import { useSpring, animated } from "react-spring";
import {AiOutlineHeart} from 'react-icons/ai'
import Basket from "../Header Components/Basket";
import {useSelector, useDispatch} from 'react-redux'
import { increment } from '../../actions'
import { add } from '../../actions'

function ProductCard(props) {
  const [hover, setHover] = useState(false);
  const ref = useRef(Basket)
  const dispatch = useDispatch()

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset : true,
  });
  const titleAnimation = useSpring({
    from : {
      transform : 'translateY(0px)'
    },
    
    to: {
      transform: "translateY(-100px)",
    },
    reset : true,
    duration : 1500,
    
  });
  const tablefadeIn = useSpring({
    from : {opacity : 0},
    to : {opacity : 1},
    config : {duration : 1000, trail : 200},
    reset : true,
    
    
    
   
  });
  
  
  const test = useSpring({
    from : {
    
      width: '0%',
      backgroundColor : '#303030',
      wordBreak : 'keep-all',
    
    },
    to: {
      width : '100%',
      color : 'white'
    },
    config : {duration : 200},
    reset : true,
    
  })

  const isHovered = () => {
    return (
      // style={hover ? fadeIn : ""}
      <animated.div  className={"hovered"}>
        <div>
      
        </div>
        <div className={"size-table"}>
          <animated.div  style =  {hover ? tablefadeIn : null} className={"item__wrapper"}>
            {props.size.map((item) => {
              return (
                <div>
                  <div className={"size-table-item"}>{item}</div>
                </div>
                
              );
            })}
          </animated.div>
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
        <animated.div
        className={"product-title"}
      >
        {props.title}
      </animated.div>
      <div className={"product-photo"}>
        <img src={props.photo} />
        {hover ? isHovered() : ""}
       
      </div>
    
      
      {hover ?  <animated.div onClick = {() => {dispatch(increment(props.price)); dispatch(add({photo: props.photo, title : props.title, price : props.price }))}} price = {props.price} className = {'product-price'} style = {test}><p>{props.price}</p><p>Dodaj do koszyka</p> <p><AiOutlineHeart/></p> </animated.div>  : <div className={"product-price"}>{props.price}</div> }
    </div>
  );
}

export default ProductCard;
