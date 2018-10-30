import {
    FETCH_MOVIES,
    GET_MOVIE,
    FETCH_ERROR
} from '../actions/types';

const initialState = {
    movies: [],
    movie: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, movies: action.payload, error: '' };
        case GET_MOVIE:
            return { ...state, movie: action.payload, error: '' };
        case FETCH_ERROR:
            return { ...state, movies: [], error: action.payload };
        default:
            return state;
    }
};
