import { ADD_PRODUCT_IN_CART } from "../Constants/actionTypes";

const initialState = {
    goods: JSON.parse(localStorage.getItem('goods')) || [],
    quantity: JSON.parse(localStorage.getItem('quantity')) || 0,
    total: JSON.parse(localStorage.getItem('total')) || 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_IN_CART:
            localStorage.setItem('goods', JSON.stringify([...state.goods, action.payload]));
            localStorage.setItem('quantity', state.quantity + 1)
            localStorage.setItem('total', state.total + (action.payload.price * action.payload.quantity))
            return {
                ...state,
                goods: [...state.goods, action.payload],
                quantity: state.quantity + 1,
                total: state.total + (action.payload.price * action.payload.quantity)
            }
        default:
            return state
    }
}

export default cartReducer;