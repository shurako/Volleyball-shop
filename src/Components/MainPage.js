import React from "react";


import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PromotedProducts from './PromotedProducts/PromotedProducts';
import PartnersBar from './PartnersBarComponents/PartnersBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdvantagesBar from "./AdvantagesBarComponents/AdvantagesBar";
import CarouselMobile from "./CarouselMobile";

function MainPage() {
  const renderCarousel =() => {
    if(window.innerHeight > window.innerWidth ){
      return(<CarouselMobile/>)
    }
    else if(window.innerHeight < window.innerWidth ){
      return(<Carousel/>)
    }
  }


  return (
    <div>
      <div>
        {renderCarousel()}
      </div>
      <AdvantagesBar/>
      <PromotedProducts />
      <PartnersBar />
    </div>
  );
}

export default MainPage;
