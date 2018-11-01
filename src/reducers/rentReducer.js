import {
    ADD_TO_CART,
    GET_CART
} from '../actions/types';

const initialState = {
    cart: {},
    rents: [],
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: { ...action.payload } };
        case GET_CART:
            return { ...state, ...state.cart };
        default:
            return state;
    }
};
