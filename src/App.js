import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header Components/Header";
import Carousel from "./Components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdvantagesBar from "./Components/AdvantagesBarComponents/AdvantagesBar";
import PromotedProducts from "./Components/PromotedProducts/PromotedProducts";
import PartnersBar from "./Components/PartnersBarComponents/PartnersBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./Components/MainPage";
import ProductCard from "./Components/ProductComponents/ProductCard";
import ProductPage from "./Components/ProductPages/ProductPage";
import ClothesPage from "./Components/ProductPages/ClothesPage";

function App() {
  
  const [total, setTotal] = useState(0)
  
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowSize(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);


  const [headerSize, setHeaderSize] = useState();

  return (
    <div className="App">
      <Router>
        <Header total = {total} setTotal = {setTotal} headerSize = {headerSize} setHeaderSize = {setHeaderSize} />
        <Switch>
          <Route path={"/shoes"} component={() => <ProductPage total = {total} setTotal = {setTotal} /> } />
          <Route path={"/clothes"} component={() => <ClothesPage/> } />
          <Route path={"/"} exact component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
