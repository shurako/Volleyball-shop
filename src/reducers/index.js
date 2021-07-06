import counterReducer from "./counter";
import basketData from "./basketData";
import isBasketShown from './isBasketShown'
import ProductDB from "./ProductDB";
import { combineReducers } from "redux";
import FilterKey from "./FilterKey";
import setMobileView from "./setMobileView";
import headerHeight from "./headerHeight";

const allReducers = combineReducers({
    counterReducer,
    basketData,
    isBasketShown,
    ProductDB,
    FilterKey,
    setMobileView,
    headerHeight,
    
})

export default allReducers