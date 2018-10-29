import {
    FETCH_MOVIE,
    FETCH_ERROR
} from '../actions/types';

const initialState = {
    movies: [],
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return { ...state, movies: action.payload, error: '' };
        case FETCH_ERROR:
            return { ...state, movies: [], error: action.payload };
        default:
            return state;
    }
};
