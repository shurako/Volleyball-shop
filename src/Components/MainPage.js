import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdvantagesBar from "./AdvantagesBarComponents/AdvantagesBar";
import Carousel from "./Carousel";
import CarouselMobile from "./CarouselMobile";
import PartnersBar from "./PartnersBarComponents/PartnersBar";
import PromotedProducts from "./PromotedProducts/PromotedProducts";

function MainPage() {
  const renderCarousel = () => {
    if (window.innerHeight > window.innerWidth) {
      return <CarouselMobile />;
    } else if (window.innerHeight < window.innerWidth) {
      return <Carousel />;
    }
  };

  return (
    <div>
      <div>{renderCarousel()}</div>
      <AdvantagesBar />
      <PromotedProducts />
      <PartnersBar />
    </div>
  );
}

export default MainPage;
