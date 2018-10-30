import axios from 'axios';
import { FETCH_MOVIES, GET_MOVIE, FETCH_ERROR } from './types';

let API_URL = 'http://movieholic-api.herokuapp.com/api';

export const fetchMovies = () => async dispatch => {
    await axios.get(`${API_URL}/movie`)
        .then(({ data }) => dispatch({ type: FETCH_MOVIES, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getMovie = title => async dispatch => {
    await axios.get(`${API_URL}/movie/${title}`)
        .then(({ data }) => dispatch({ type: GET_MOVIE, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};