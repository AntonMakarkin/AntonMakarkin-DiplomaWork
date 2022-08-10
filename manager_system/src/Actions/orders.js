import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_ID, ERROR,
         INC_GOODS, DEC_GOODS, CALC_TOTAL } from "../Constants/actionTypes";
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

        dispatch({ type: FETCH_BY_ID, payload: data });
        dispatch({ type: END_LOADING })
    } catch (err) {
        console.log(err);
        dispatch({ type: ERROR, payload: 'Ошибка'})
    }
}

export const increaseGoods = (id) => (dispatch) => {
    try {
        dispatch({ type: INC_GOODS, payload: id })
    } catch (err) {
        //console.log(err);
    }
}

export const decreaseGoods = (id) => (dispatch) => {
    try {
        dispatch({ type: DEC_GOODS, payload: id })
    } catch (err) {
        //console.log(err);
    }
}

export const updateOrder = (updatedOrder, id, history) => async (dispatch) => {
    try {
        console.log(updatedOrder)
        await API.updateOrderById(updatedOrder, id)

        history.goBack();
    } catch (err) {
        console.log(err);
        dispatch({ type: ERROR, payload: 'Ошибка. Заказа с таким номером не существует или отсутствует достаточное кол-ва товара'})
    }
}