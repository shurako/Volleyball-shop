import React from "react";
import "./MainBasket.css";
import { useSelector, useDispatch } from "react-redux";
import {TiDelete} from 'react-icons/ti' 
import { remove } from "../../../actions";
function MainBasket(props) {
  const data = useSelector((state) => state.basketData);

  const dispatch = useDispatch()




  return (
    <div className={"basket-window"}>
      <div className= {'basket-window-header'}>
        <p>Twój koszyk</p>
      </div>

      <div>
        {data.map((item, i) => {
          return (
            <div className = {'basket-item__wrapper'}>
              <div>
                <img alt={""} src={item.photo} />
              </div>
              <div className = {'basket-item-data__wrapper'}>
                  <div>
                      {item.title}</div>
                  <div>
                    <div>ilość: x</div> 
                    <div>{item.price} zł</div> 
                  </div>
                  
              </div>
              <div className = {'basketitem__close-btn'}><button onClick = {() => {dispatch(remove(item)); console.log(data)} }><TiDelete/></button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainBasket;
