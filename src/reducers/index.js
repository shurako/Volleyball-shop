import counterReducer from "./counter";
import basketData from "./basketData";
import isBasketShown from './isBasketShown'
import ProductDB from "./ProductDB";
import { combineReducers } from "redux";
import FilterKey from "./FilterKey";

const allReducers = combineReducers({
    counterReducer,
    basketData,
    isBasketShown,
    ProductDB,
    FilterKey,
    
})

export default allReducers