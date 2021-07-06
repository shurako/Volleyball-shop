import React from "react";
import "./ProductCard.css";
import { AiOutlineStar, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increment, add } from "../../actions";

function Product(props) {
  const dispatch = useDispatch()
  const { size, title, photo, price, brand, promoted } = props.product;

  const renderSizeContainer = () => {
    return (
      <div>
        <div>
          <p>Dostępne rozmiary:</p>
        </div>
        <div className={"size-table"}>
          {size.map((size) => {
            return <div className={"size-table-item"}>{size}</div>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={"product product-card"}>
      <div className={"product-photo"}>
        <img alt={""} src={photo} />
      </div>
      <div className={"product-title"}>{title}</div>

      <div className = {'flex space-btw'}>
        <div className={"product-star__wrapper"}>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className = {'product-price'}>{price} zł</div>
      </div>
      {renderSizeContainer()}
      <div className={"flex space-btw"}>
        <div onClick = {() => {dispatch(add({photo: photo, title : title, price : price })); dispatch(increment(price));}} className="add-to-cart">DO KOSZYKA</div>
        <div className = {'flex'}>
          <div className={"product-icon"}>
            <AiOutlineHeart />
          </div>
          <div className={"product-icon"}>
            <AiOutlineEye />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
