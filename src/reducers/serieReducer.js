import {
    FETCH_SERIES,
    GET_SERIE,
    FETCH_ERROR
} from '../actions/types';

const initialState = {
    series: [],
    serie: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERIES:
            return { ...state, series: action.payload, serie: {}, error: '' };
        case GET_SERIE:
            return { ...state, serie: action.payload, error: '' };
        case FETCH_ERROR:
            return { ...state, series: [], error: action.payload };
        default:
            return state;
    }
};
