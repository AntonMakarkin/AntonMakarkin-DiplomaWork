import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from './userReducer';
import dataReducer from './dataReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer
    }
}, composeWithDevTools(applyMiddleware(thunk)));