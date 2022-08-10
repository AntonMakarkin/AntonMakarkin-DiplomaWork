import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_ID, ERROR } from "../Constants/actionTypes";
import * as API from '../API/index';

export const getOrders = (page, status) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await API.getOrders(page, status);
        console.log(data)

        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (err) {
        console.log(err);
        dispatch({ type: ERROR, payload: 'Ошибка' })
    }
}

export const getOrderById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await API.getOrderById(id);
        console.log(data)

        dispatch({ type: FETCH_BY_ID, payload: data });
        dispatch({ type: END_LOADING })
    } catch (err) {
        console.log(err.response);
        dispatch({ type: ERROR, payload: err.response.data.error})
    }
}

export const updateOrder = (updatedOrder, id, history) => async (dispatch) => {
    try {
        console.log(updatedOrder)
        const { data } = await API.updateOrderById(updatedOrder, id)
        console.log(data)
        
        history.goBack();
    } catch (err) {
        console.log(err);
        dispatch({ type: ERROR, payload: err.response.data.error})
    }
}