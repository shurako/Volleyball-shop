import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { hide, show } from "../../actions";
import MainBasket from "../AdvantagesBarComponents/BasketComponents/MainBasket";
import "./Basket.css";

function Basket(props) {
  const counter = useSelector((state) => state.counterReducer);
  const test = useSelector((state) => state.isBasketShown);
  const dispatch = useDispatch();

  const countAnimation = useSpring({
    val: counter,
  });

  const { rotateZ } = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 1 },
    config: { duration: 500 },

    reset: true,
  });

  return (
    <animated.div
      onMouseLeave={() => {
        dispatch(hide());
        console.log(test);
      }}
      onMouseOver={() => {
        dispatch(show());
        console.log(test);
      }}
      className={"basket"}
    >
      <animated.div
        style={{
          transform: rotateZ
            .interpolate([0, 0.2, 0.4, 0.6, 0.8, 1], [0, 10, -10, 10, -10, 0])
            .interpolate((z) => `rotateZ(${z}deg)`),
        }}
      >
        <FaShoppingBasket />
      </animated.div>
      <div className={"total"}>
        <animated.div>
          {countAnimation.val.interpolate((val) => Math.floor(val))}
        </animated.div>{" "}
        zł
      </div>
      <MainBasket />
    </animated.div>
  );
}

export default Basket;
