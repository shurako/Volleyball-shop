import React from "react";
import ProductCard from "../ProductComponents/ProductCard.js";
import { ProductData } from "../ProductData";
import "./PromotedProducts.css";
import Product from "../ProductComponents/Product.js";
import { useSelector, } from "react-redux";





function PromotedProducts() {

  const filterKey = useSelector((state) => state.FilterKey )
  const products = useSelector((state) => state.ProductDB)
  
  

  const filter =  products.filter(product =>  filterKey.every(filter => { if(!Array.isArray(product[filter.key])){return filter.value.includes(product[filter.key]) }else {return filter.value.some( value => product[filter.key].includes(value) ) } }   ))
  const render = filter.map((product, key) => {return (<div key = {key} className = {'product__wrapper'}> <Product product = {product}/></div>) })
  

  return (
    <div className={"main-section"}>
      <div className={"section-title"}>POLECAMY</div>
      <div className = {'promoted-products__wrapper'}>{render}</div>
      
      
      
       





    </div>
  );
}

export default PromotedProducts;
