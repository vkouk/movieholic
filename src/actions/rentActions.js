import axios from 'axios';
import { Config } from '../utils/Config';
import {
    STORE_RENT, ADD_TO_CART, GET_CART
} from './types';

export const storeRent = userId => async dispatch => {
    await axios.post(`${Config.API_URL}/rent`, userId)
        .then(({ data }) => {
            console.log(data)
        })
        .catch(error => console.log(error));
};

export const addToCart = cartValues => async dispatch => {
    dispatch({ type: ADD_TO_CART, payload: cartValues });
};

export const getCart = () => async dispatch => {
    dispatch({ type: GET_CART });
};