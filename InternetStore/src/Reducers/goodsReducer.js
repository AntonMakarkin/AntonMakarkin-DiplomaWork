import { HOME_PAGE_START_LOADING, HOME_PAGE_FETCH, HOME_PAGE_END_LOADING, FETCH_BY_ID,
         START_LOADING, END_LOADING, ERROR } from "../Constants/actionTypes";

const initialState = {
    isLoading: true,
    isError: false,
    errorMessage: '',
    categories: [],
    lastGoods: [],
    goodsById: []
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_PAGE_START_LOADING:
            return { ...state, isLoading: true }
        case HOME_PAGE_FETCH:
            return {
                ...state,
                categories: action.payload.categories,
                lastGoods: action.payload.goods
            }
        case HOME_PAGE_END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_BY_ID:
            return {
                ...state,
                goodsById: action.payload.item
            }
        case ERROR:
            return { ...state, isError: true }
        default:
            return state
    }
}

export default goodsReducer;

