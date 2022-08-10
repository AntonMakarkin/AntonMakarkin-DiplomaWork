import { REGISTER, LOGIN, LOGOUT, REFRESH, LOGIN_ERROR, REGISTER_ERROR } from '../Constants/actionTypes';
import * as API from '../API/index';

export const register = (formData, router) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await API.signUp(formData);
        console.log(data);

        dispatch({ type: REGISTER, data });

        router('/');
    } catch (err) {
        console.log(err);
        dispatch({ type: REGISTER_ERROR });
    }
}

export const login = () => async (dispatch) => {

};

export const refresh = (router) => async (dispatch) => {
    try {
        const { data } = await API.refresh();

        dispatch({ type: REFRESH, data });

    } catch (err) {
        console.log(err);
        
        dispatch({ type: LOGOUT });

        router('/');
    }
}
