import React, { useState } from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { animated, useSpring } from "react-spring";
import { add, increment } from '../../actions';
import "./ProductCard.css";

function ProductCard(props) {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch()


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
     
        {hover ? isHovered() : ""}
       
      </div>
    
      
      {hover ?  <animated.div onClick = {() => { dispatch(add({photo: props.photo, title : props.title, price : props.price })); dispatch(increment(props.price));}} price = {props.price} className = {'product-price'} style = {test}><p>{props.price}</p><p>Dodaj do koszyka</p> <p><AiOutlineHeart/></p> </animated.div>  : <div price = {props.price} className={"product-price"}>{props.price}</div> }
    </div>
  );
}

export default ProductCard;
