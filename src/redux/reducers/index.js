

import navigationReducer from "./navigation";
import authorReducer from "./author";
import idiologyReducer from "./idiology";
import userReducer from "./user"
import { combineReducers } from "redux";

const allReducers = combineReducers({
   
    navigation: navigationReducer,
    author: authorReducer,
    idiology: idiologyReducer,
    usertype : userReducer
    
}) 

export default allReducers