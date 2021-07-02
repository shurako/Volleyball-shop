import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { filterByCategory, setProducts } from "../../actions";



function Nav(props) {
  const navStyle = {
    color: "Black",
    textDecoration: "none",
  };

  // const products = useSelector((state) => state.ProductDB)
  
  // console.log(products[0].title)
  const dispatch = useDispatch() 


  return (
    <div className={"nav filter"}>
      

      <Link onClick =  {() => {props.setShowMenu_mobile(!props.showMenu_mobile); }} style={navStyle}  to={"/shoes"}>
        <div className={"nav item"}>Obuwie</div>
      </Link>
      <Link  to={"/clothes"}><div className={"nav item"}>Odzież</div></Link> 
      <div className={"nav item"}>Dla niej</div>
      <div className={"nav item"}>Dla niego</div>
      <div className={"nav item"}>Akcesoria</div>
      <div className={"nav item"}>Strefa kibica</div>
      <div className={"nav item"}>Dla drużyn</div>
    </div>
  );
}

export default Nav;
