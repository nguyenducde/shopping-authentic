
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
    productReducer,
    cartReducer
})

export default reducer