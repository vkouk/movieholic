import { FETCH_DASHBOARD, FETCH_ERROR } from '../actions/types';

const initialState = {
    orders: {},
    members: {},
    mostRented: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DASHBOARD:
            return { ...state, orders: action.order_payload, members: action.member_payload, mostRented: action.rented_payload, error: '' };
        case FETCH_ERROR:
            return { ...state, orders: {}, members: {}, mostRented: {}, error: action.payload };
        default:
            return state;
    }
};