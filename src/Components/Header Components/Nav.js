import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { filterByCategory, setProducts } from "../../actions";



function Nav(props) {
  const isMobile = useSelector((state) => state.setMobileView)


  const navStyle = {
    color : isMobile ? 'white' : 'black',
    textDecoration: "none",
  };

  // const products = useSelector((state) => state.ProductDB)
  
  // console.log(products[0].title)
  const dispatch = useDispatch() 


  return (
    <div className={"nav filter"}>
      <Link style={navStyle}  to={"/shoes"}>
        <div className={"nav item"}>Obuwie</div>
      </Link>
<<<<<<< HEAD
      <Link style={navStyle} to={"/clothes"}><div className={"nav item"}>Odzież</div></Link> 
      <Link style={navStyle} to = {"/accessories"}><div className={"nav item"}>Akcesoria</div></Link> 
=======
      <Link  to={"/clothes"}><div className={"nav item"}>Odzież</div></Link> 
      <div className={"nav item"}>Dla niej</div>
      <div className={"nav item"}>Dla niego</div>
      <div className={"nav item"}>Akcesoria</div>
>>>>>>> parent of 19dc26c (Filter bug fix)
      <div className={"nav item"}>Strefa kibica</div>
      <div className={"nav item"}>Dla drużyn</div>
    </div>
  );
}

export default Nav;
