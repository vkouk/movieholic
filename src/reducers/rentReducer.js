import {
    ADD_TO_CART,
    CALCULATE_CART_TOTAL,
    GET_CART,
    ORDER_CART_ITEMS,
    GET_ORDER,
    GET_ORDERS,
    ORDER_ERROR
} from '../actions/types';

const initialState = {
    cart: {},
    orders: [],
    order: {},
    cartTotal: 0,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: { ...action.payload }, error: '' };
        case CALCULATE_CART_TOTAL:
            return { ...state, cartTotal: state.cartTotal + action.payload };
        case GET_CART:
            return { ...state, ...state.cart };
        case ORDER_CART_ITEMS:
            return { ...state, cart: {}, cartTotal: 0, error: '' };
        case GET_ORDER:
            return { ...state, order: action.payload };
        case GET_ORDERS:
            return { ...state, orders: action.payload };
        case ORDER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
