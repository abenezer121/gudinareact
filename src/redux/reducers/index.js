

import navigationReducer from "./navigation";
import authorReducer from "./author";
import idiologyReducer from "./idiology";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   
    navigation: navigationReducer,
    author: authorReducer,
    idiology : idiologyReducer
    
}) 

export default allReducers