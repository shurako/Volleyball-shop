import React from "react";
import { Carousel } from "react-responsive-carousel";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Carousel autoPlay interval = {3000} dynamicHeight = {false}
    showThumbs = {false}
  >
  
    <div>
      {<img alt="" src="2.png" />}
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="2.png" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="2.png" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="2.png" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="2.png" />
      <p className="legend">Legend 5</p>
    </div>
   
  </Carousel>
);