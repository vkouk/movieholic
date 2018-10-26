import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [
    applyMiddleware(thunk),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
];

const store = createStore(
    reducers,
    {},
    compose(...middleware)
);

export default store;