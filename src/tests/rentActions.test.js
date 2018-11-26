import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as types from '../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('rent/cart actions', () => {
    const store = mockStore();

    beforeEach(() => {
        store.clearActions();
    });
});