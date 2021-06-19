import React from "react";

function MainNav() {
  return (
    <div className = {'main-nav__wrapper'}>
      <div className={"main nav"}>
        <div className={"main nav item"}>Strona Główna</div>
        <div className={"main nav item"}>Nasze Sklepy</div>
        <div className={"main nav item"}>Kontakt</div>
      </div>
   
    <div className = {'input-wrapper'}>
      <input className = {'search'}></input>
    </div>


      <div className = {'login-section'}>
          <div className={"main nav item"} >Zaloguj</div>
          <div className={"main nav item"}>Rejestracja</div>
      </div>
    </div>
  );
}

export default MainNav;
