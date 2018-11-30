import { Config } from '../utils/Config';
import axios from 'axios';
import { FETCH_DASHBOARD_ORDERS, FETCH_DASHBOARD_MEMBERS, FETCH_DASHBOARD_MOST_RENTED, FETCH_ERROR } from './types';

export const getLatestOrders = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/orders`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD_ORDERS, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getLatestMembers = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/members`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD_MEMBERS, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};

export const getMostRented = () => async dispatch => {
    await axios.get(`${Config.API_URL}/dashboard/most-rented`)
        .then(({ data }) => dispatch({ type: FETCH_DASHBOARD_MOST_RENTED, payload: data }))
        .catch(error => dispatch({ type: FETCH_ERROR, payload: error.response.data }));
};