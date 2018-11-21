import { GET_USER_RECOMMENDATIONS, FETCH_ERROR } from '../actions/types';

const initialState = {
    recommendations: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_RECOMMENDATIONS:
            return { ...state, recommendations: action.payload, error: '' };
        case FETCH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
