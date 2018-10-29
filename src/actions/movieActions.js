import axios from 'axios';
import { FETCH_MOVIE, FETCH_ERROR } from './types';

let API_URL = 'http://movieholic-api.herokuapp.com/api';

export const fetchMovies = () => async dispatch => {
    await axios.get(`${API_URL}/movie`)
        .then(({ data }) => dispatch({ type: FETCH_MOVIE, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};