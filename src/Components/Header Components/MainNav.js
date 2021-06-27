import React from "react";
import {Link} from 'react-router-dom'
import LoginSection from "./LoginSection";
function MainNav() {

  const navStyle = {
    color: 'Black',
    textDecoration : 'none'
}

  return (
    <div className = {'main-nav__wrapper'}>
      

      <div className={"main nav"}>
        <Link to = '/' style = {navStyle} ><div className={"main nav item"}>Strona Główna</div></Link>
        <div className={"main nav item"}>Nasze Sklepy</div>
        <div className={"main nav item"}>Kontakt</div>
      </div>
   
    <div className = {'input-wrapper'}>
      <input className = {'search'}></input>
    </div>
    <LoginSection/>

      
    </div>
  );
}

export default MainNav;
