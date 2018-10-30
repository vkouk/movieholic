import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rentReducer from './rentReducer';
import movieReducer from './movieReducer';
import serieReducer from './serieReducer';

export default combineReducers({
    auth: authReducer,
    rent: rentReducer,
    movie: movieReducer,
    serie: serieReducer
});
