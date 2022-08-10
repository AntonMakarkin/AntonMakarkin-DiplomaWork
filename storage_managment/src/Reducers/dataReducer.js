import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_ID, ERROR,
         START_LOADING_COURIERS, END_LOADING_COURIERS, FETCH_ALL_COURIERS,
         INC_GOODS, DEC_GOODS, CALC_TOTAL } from "../Constants/actionTypes";

const initialState = {
    isLoading: true,
    isCouriersLoading: true,
    isError: false,
    errorMessage: '',
    couriers: [], 
    items: [],
    item: {},
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case START_LOADING:
        return { ...state, isLoading: true, isError: false, errorMessage: '' }
    case START_LOADING_COURIERS:
        return { ...state, isCouriersLoading: true, isError: false }
    case END_LOADING:
        return { ...state, isLoading: false }
    case END_LOADING_COURIERS:
        return { ...state, isCouriersLoading: false }
    case FETCH_ALL:
        return {
            ...state,
            items: action.payload.items,
            currentPage: action.payload.currentPage,
            numberOfPages: action.payload.numberOfPages
        }
    case FETCH_ALL_COURIERS:
        return {
            ...state,
            couriersItems: action.payload.items
        }
    case FETCH_BY_ID:
        return {
            ...state,
            item: action.payload.item,
            couriers: action.payload.couriers
        }
    case INC_GOODS:
        return {
            ...state,
            item: { ...state.item, goods: state.item.goods.map(
                (goods) => goods._id === action.payload ? { ...goods, quantity: ++goods.quantity } : goods
            ), total: state.item.goods.reduce((prevValue, currVal) => prevValue + (currVal.quantity * currVal.price),0)}
        }
    case DEC_GOODS:
        return {
            ...state,
            item: { ...state.item, goods: state.item.goods.map(
                (goods) => goods._id === action.payload ? { ...goods, quantity: --goods.quantity } : goods
            ), total: state.item.goods.reduce((total, arg) => total + (arg.quantity * arg.price),0)}
        }
    case ERROR:
        return { ...state, isLoading: false, isError: true, errorMessage: action.payload }
    default:
        return state
    }
}

export default dataReducer