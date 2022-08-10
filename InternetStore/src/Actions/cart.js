import { ADD_PRODUCT_IN_CART } from "../Constants/actionTypes";
import * as API from '../API/index';

export const addProductInCart = (data) => async (dispatch) => {
    try {
        dispatch({ type: ADD_PRODUCT_IN_CART, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteProductFromCart = () => async (dispatch) => {

}

export const clearCart = () => async (dispatch) => {
    
}

export const sendOrder = (order) => async (dispatch) => {
    try {
        console.log(order);
        await API.sendOrder(order)
    } catch (err) {
        console.log(err);
    }
}