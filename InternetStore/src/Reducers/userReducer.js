import { REGISTER, LOGIN, LOGOUT, REFRESH, LOGIN_ERROR, REGISTER_ERROR } from '../Constants/actionTypes';

const defaultState = {
    //currentUser: localStorage.getItem('profile'),
    currentUser: JSON.parse(localStorage.getItem('profile')),
    authError: false,
    registerError: false,
    isAuth: false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER:
            localStorage.setItem('token', action?.data?.accessToken);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.user }));
            return { ...state, currentUser: action.data.user, authError: false, isAuth: true, registerError: false };
        case LOGIN:
            localStorage.setItem('token', action?.data?.accessToken);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.user }));
            return { ...state, currentUser: action.data.user, authError: false, isAuth: true, registerError: false };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            return { ...state, currentUser: null, authError: false, isAuth: false, registerError: false };
        case REFRESH:
            localStorage.setItem('token', action?.data?.accessToken);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.user }));
            return { ...state, currentUser: action.data.user, authError: false, isAuth: true, registerError: false };
        case LOGIN_ERROR:
            return { ...state, authError: true, isAuth: false };
        case REGISTER_ERROR: {
            return { ...state, registerError: true };
        }
        default:
            return state;
    }
};

export default userReducer;