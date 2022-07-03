

import navigationReducer from "./navigation";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   

    navigation: navigationReducer,
  
    
}) 

export default allReducers