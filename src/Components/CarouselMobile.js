import React from "react";
import { Carousel } from "react-responsive-carousel";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Carousel autoPlay interval = {3000} dynamicHeight = {false}
    showThumbs = {false}
  >
     <div>
      <img alt="" src="./banners/2m.jpg" />
      
    </div>
    <div>
      <img alt="" src="./banners/1m.jpg" />
   
    </div>
    <div>
      <img alt="" src="./banners/3m.jpg" />
    </div>
   
   
  </Carousel>
);