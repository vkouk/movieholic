import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rentReducer from './rentReducer';

export default combineReducers({
    auth: authReducer,
    rent: rentReducer
});
