import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_ID, ERROR } from "../Constants/actionTypes";

const initialState = {
    isLoading: true,
    isError: false,
    errorMessage: '',
    items: [],
    item: {},
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case START_LOADING:
        return { ...state, isLoading: true, isError: false, errorMessage: '' }
    case END_LOADING:
        return { ...state, isLoading: false }
    case FETCH_ALL:
        return {
            ...state,
            items: action.payload.items,
            currentPage: action.payload.currentPage,
            numberOfPages: action.payload.numberOfPages
        }
    case FETCH_BY_ID:
        return {
            ...state,
            item: action.payload
        }
    case ERROR:
        return { ...state, isLoading: false, isError: true, errorMessage: action.payload }
    default:
        return state
    }
}

export default dataReducer