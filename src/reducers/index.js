import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rentReducer from './rentReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    auth: authReducer,
    rent: rentReducer,
    movie: movieReducer
});
