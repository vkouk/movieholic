import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    UPDATE_USER
} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, user: action.payload, isAuthenticated: true, error: '' };
        case UNAUTH_USER:
            return { ...state, user: action.payload, isAuthenticated: false, error: '' };
        case UPDATE_USER:
            return { ...state, user: action.payload, error: '' };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
