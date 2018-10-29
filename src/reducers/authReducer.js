import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
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
        case AUTH_ERROR:
            return { ...state, error: action.payload, isAuthenticated: false };
        default:
            return state;
    }
};
