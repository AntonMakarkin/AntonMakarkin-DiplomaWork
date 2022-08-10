import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from './userReducer';
import goodsReducer from './goodsReducer'
import cartReducer from "./cartReducer";


export const store = configureStore({
    reducer: {
        user: userReducer,
        goods: goodsReducer,
        cart: cartReducer
    }
}, composeWithDevTools(applyMiddleware(thunk)));