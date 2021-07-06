import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header Components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ProductPage from "./Components/ProductPages/ProductPage";
import ClothesPage from "./Components/ProductPages/ClothesPage";
import { setCategory, setDesktop, setProducts } from "./actions";
import setMobileView from "./reducers/setMobileView";
import { setMobile } from "./actions";

function App() {
  
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()

  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowSize(window.innerWidth);
  };

  const resize = () => {
    if(window.innerWidth < window.innerHeight){
      dispatch(setMobile())
    }
    else dispatch(setDesktop())

  }
  
  resize()
  window.addEventListener("resize", resize);


  const [headerSize, setHeaderSize] = useState();

  return (
    <div className="App">
      <Router>
        <Header total = {total} setTotal = {setTotal} headerSize = {headerSize} setHeaderSize = {setHeaderSize} />
        <Switch>
          <Route path={"/shoesTest"} component={() => <ProductPage total = {total} setTotal = {setTotal} /> } />
          <Route path={"/shoes"} component={() => <ClothesPage filter = { dispatch(setCategory({key : 'category', value : ['shoes']})) } /> } />
          <Route path={"/clothes"} component={() => <ClothesPage filter = { dispatch(setCategory({key : 'category', value : ['shirts']})) } /> } />
          <Route path={"/accessories"} component={() => <ClothesPage filter = { dispatch(setCategory({key : 'category', value : ['accessories']})) } /> } />
          <Route path={"/women"} component={() => <ClothesPage filter = { dispatch(setCategory({key : 'category', value : ['women']})) } /> } />
          <Route path={"/"} exact component={ () => <MainPage  filter = { dispatch(setCategory({key : 'promoted', value : [true]})) }  />   } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
