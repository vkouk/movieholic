import { Config } from '../utils/Config';
import axios from 'axios';
import { FETCH_DASHBOARD, FETCH_ERROR } from './types';

export const getLatestOrders = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/orders`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD, order_payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getLatestMembers = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/members`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD, member_payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getMostRented = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/most-rented`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD, rented_payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};