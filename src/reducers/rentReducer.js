import {
    ADD_TO_CART,
    CALCULATE_CART_TOTAL,
    GET_CART
} from '../actions/types';

const initialState = {
    cart: {},
    rents: [],
    cartTotal: 0,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: { ...action.payload } };
        case CALCULATE_CART_TOTAL:
            return { ...state, cartTotal: state.cartTotal + action.payload };
        case GET_CART:
            return { ...state, ...state.cart };
        default:
            return state;
    }
};
