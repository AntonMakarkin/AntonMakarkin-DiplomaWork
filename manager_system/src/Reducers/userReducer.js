import { LOGIN, LOGOUT, LOGIN_ERROR } from '../Constants/actionTypes';

const defaultState = {
    currentUser: JSON.parse(localStorage.getItem('profile')),
    authError: false,
    isAuth: false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action?.data?.accessToken);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.user }));
            return { ...state, currentUser: action.data.user, authError: false };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            return { ...state, currentUser: null};
        case LOGIN_ERROR:
            return { ...state, authError: true }
        default:
            return state;
    }
}

export default userReducer;