import axios from 'axios';
import { Config } from '../utils/Config';
import {
    ORDER_CART_ITEMS, ADD_TO_CART, GET_CART, CALCULATE_CART_TOTAL, ORDER_ERROR, GET_ORDER, GET_ORDERS, REMOVE_MOVIE_CART_ITEM, REMOVE_SERIE_CART_ITEM, GET_USER_ORDERS
} from './types';

export const storeRent = (rentValues, history) => async dispatch => {
    await axios.post(`${Config.API_URL}/rent`, rentValues)
        .then(() => {
            dispatch({ type: ORDER_CART_ITEMS });
            history.push('/');
        })
        .catch(error => dispatch({ type: ORDER_ERROR, payload: error.response.data }));
};

export const getRents = () => async dispatch => {
    await axios.get(`${Config.API_URL}/rent`)
        .then(({ data }) => dispatch({ type: GET_ORDERS, payload: data }))
        .catch(error => dispatch({ type: ORDER_ERROR, payload: error.response.data }));
};

export const getRent = rentId => async dispatch => {
    await axios.get(`${Config.API_URL}/rent/${rentId}`)
        .then(({ data }) => dispatch({ type: GET_ORDER, payload: data }))
        .catch(error => dispatch({ type: ORDER_ERROR, payload: error.response.data }));
};

export const getUserRents = userId => async dispatch => {
    await axios.get(`${Config.API_URL}/rent/user/${userId}`)
        .then(({ data }) => dispatch({ type: GET_USER_ORDERS, payload: data }))
        .catch(error => dispatch({ type: ORDER_ERROR, payload: error.response.data }));
};

export const addToCart = cartValues => async dispatch => {
    dispatch({ type: ADD_TO_CART, payload: cartValues });
};

export const getCart = () => async dispatch => {
    dispatch({ type: GET_CART });
};

export const cartTotalAmount = total => async dispatch => {
    dispatch({ type: CALCULATE_CART_TOTAL, payload: total });
};

export const removeMovieFromCart = movieId => async dispatch => {
    dispatch({ type: REMOVE_MOVIE_CART_ITEM, payload: movieId });
};

export const removeSerieFromCart = serieId => async dispatch => {
    dispatch({ type: REMOVE_SERIE_CART_ITEM, payload: serieId });
};