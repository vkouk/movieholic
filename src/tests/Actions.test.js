import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import expect from 'expect';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as types from '../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should login a user', () => {
        const userData = { type: 'auth_user', payload: { email: "test@test.com", password: 12345 } };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: userData.payload,
            });
        });
        const expectedActions = [
            { type: types.AUTH_USER, payload: userData.payload },
        ];
        const store = mockStore({ user: {} });
        return store.dispatch(actions.loginUser(userData.payload))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});