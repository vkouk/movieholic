import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as types from '../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('recommendation actions', () => {
    const store = mockStore();

    beforeEach(() => {
        store.clearActions();
    });

    describe('get/clear user recommendations', () => {
        it('should get all user recommendations', () => {
            const userData = { type: types.GET_USER_RECOMMENDATIONS, payload: { userId: 123 } };

            const expectedActions = [{
                type: types.GET_USER_RECOMMENDATIONS,
                payload: userData.payload
            }];

            store.dispatch(actions.getUserRecommendations(userData.payload))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });

        it('should clear all user recommendations', () => {
            const expectedActions = [{
                type: types.CLEAR_RECOMMENDATIONS
            }];

            store.dispatch(actions.clearRecommendations())
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
    });
});