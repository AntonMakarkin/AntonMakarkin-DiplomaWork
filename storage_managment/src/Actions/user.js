import { LOGIN, LOGOUT, LOGIN_ERROR } from "../Constants/actionTypes";
import * as API from '../API/index';

export const login = (formData, history) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await API.signIn(formData);
        console.log(data)

        dispatch({ type: LOGIN, data });

        history.push('/');
    } catch (err) {
        console.log(err);
        dispatch({ type: LOGIN_ERROR });
    }
}

export const logout = (history) => async (dispatch) => {
    try {
        await API.logout();

        dispatch({ type: LOGOUT });

        history.push('/login');
    } catch (err) {
        dispatch({ type: LOGOUT });

        history.push('/login');
    }
};