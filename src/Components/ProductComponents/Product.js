import React from "react";
import './ProductCard.css'


function Product(props) {

const {size, title, photo, price } = props.product
  return (
    <div className={"product product-card"}>
      <div className={"product-title"}>{title}</div>
      <div className={"product-photo"}>
        <img alt = {''} src={photo} />
      </div>
      <div className = 'product-price' >{price}</div>
    </div>
  );
}

export default Product;
