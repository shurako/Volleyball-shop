import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function Nav(props) {
  const isMobile = useSelector((state) => state.setMobileView)


  const navStyle = {
    color : isMobile ? 'white' : 'black',
    textDecoration: "none",
  };


  return (
    <div className={"nav filter"}>
      <Link style={navStyle}  to={"/shoes"}>
        <div className={"nav item"}>Obuwie</div>
      </Link>
      <Link style={navStyle} to={"/clothes"}><div className={"nav item"}>Odzież</div></Link> 
      <Link style={navStyle} to = {"/accessories"}><div className={"nav item"}>Akcesoria</div></Link> 
      <div className={"nav item"}>Strefa kibica</div>
      <div className={"nav item"}>Dla drużyn</div>
    </div>
  );
}

export default Nav;
