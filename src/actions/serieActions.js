import axios from 'axios';
import { FETCH_SERIES, GET_SERIE, FETCH_ERROR } from './types';

let API_URL = 'http://movieholic-api.herokuapp.com/api';

export const fetchSeries = () => async dispatch => {
    await axios.get(`${API_URL}/serie`)
        .then(({ data }) => dispatch({ type: FETCH_SERIES, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getSerie = title => async dispatch => {
    await axios.get(`${API_URL}/serie/${title}`)
        .then(({ data }) => dispatch({ type: GET_SERIE, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};