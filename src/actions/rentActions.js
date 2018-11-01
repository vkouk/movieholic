import axios from 'axios';
import { Config } from '../utils/Config';
import { STORE_RENT } from './types';

export const storeRent = userId => async dispatch => {
    await axios.post(`${Config.API_URL}/rent`, userId)
        .then(({ data }) => {
            console.log(data)
        })
        .catch(error => console.log(error));
};