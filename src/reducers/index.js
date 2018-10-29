import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rentReducer from './rentReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage
}

export default combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    rent: rentReducer
});
