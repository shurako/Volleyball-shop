import React from "react";
import { useSelector } from "react-redux";
import Product from "../ProductComponents/Product";
import "./ClothesPage.css";
import Filter from "./FilterComponents/Filter";

function ClothesPage(props) {
  const filterKey = useSelector((state) => state.FilterKey);
  const products = useSelector((state) => state.ProductDB);
  
  
 


  const filter = products.filter((product, key) =>
    filterKey.every((filter) => {
    
      if (!Array.isArray(product[filter.key])) {
        return filter.value.includes(product[filter.key]);
      } else {
        return filter.value.some((value) =>
          product[filter.key].includes(value)
        );
      }
    })
  );
  const render = filter.map((product, i) => {
    return (
      <div key = {i} className={"product__wrapper"}>
        {" "}
        <Product product={product} />
      </div>
    );
  });

  return (
    <div className={"products-section"}>
      <Filter />
      <div className={"promoted-products__wrapper"}>{render}</div>
    </div>
  );
}

export default ClothesPage;
