import counterReducer from "./counter";
import basketData from "./basketData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    basketData,
    
})

export default allReducers