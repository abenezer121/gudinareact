

import navigationReducer from "./navigation";
import authorReducer from "./author";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   

    navigation: navigationReducer,
    author : authorReducer
    
}) 

export default allReducers