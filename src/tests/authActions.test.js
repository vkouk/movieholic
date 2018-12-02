import configureMockStore from "redux-mock-store";
import expect from "expect";
import thunk from "redux-thunk";
import * as actions from "../actions";
import * as types from "../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("auth actions", () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe("login user", () => {
    it("should login a user", () => {
      const userData = {
        type: "auth_user",
        payload: { email: "test@test.com", password: 12345 }
      };

      const expectedActions = [
        {
          type: types.AUTH_USER,
          payload: userData.payload
        }
      ];

      store.dispatch(actions.loginUser(userData.payload)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should correct login user", () => {
      const userData = {
        type: "auth_user",
        payload: { email: "test@test.com", password: 12345 }
      };

      store.dispatch(actions.loginUser(userData.payload));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("logout user", () => {
    it("should logout user", () => {
      const expectedActions = [
        {
          type: types.UNAUTH_USER,
          payload: {}
        }
      ];

      store.dispatch(actions.logoutUser());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe(`update user's profile`, () => {
    it("should update user profile", () => {
      const userData = {
        type: types.UPDATE_USER,
        payload: { id: 1, email: "test@test.com", password: 12345 }
      };

      const expectedActions = [
        {
          type: types.UPDATE_PROFILE,
          payload: userData.payload
        }
      ];

      store.dispatch(actions.updateProfile(userData.payload, 1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should correct update user profile", () => {
      const userData = {
        type: types.UPDATE_USER,
        payload: { id: 1, email: "test@test.com", password: 12345 }
      };

      store.dispatch(actions.updateProfile(userData.payload, 1));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe(`get user's profile`, () => {
    it("should get user profile", () => {
      const userData = { type: types.AUTH_USER, payload: { id: 1 } };

      const expectedActions = [
        {
          type: types.AUTH_USER,
          payload: userData.payload
        }
      ];

      store.dispatch(actions.getProfile(userData.payload)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should return correct user profile", () => {
      const userData = { type: types.AUTH_USER, payload: { id: 1 } };

      store.dispatch(actions.getProfile(userData.payload));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("add user balance", () => {
    it("should add user balance", () => {
      const userData = {
        type: types.UPDATE_USER,
        payload: { amount: 5, id: "tok_12345visa", userId: 1 }
      };

      const expectedActions = [
        {
          type: types.UPDATE_USER,
          payload: userData.types
        }
      ];

      store.dispatch(actions.addUserBalance(userData.payload)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should correct add user balance", () => {
      const userData = {
        type: types.UPDATE_USER,
        payload: { amount: 5, id: "tok_12345visa", userId: 1 }
      };

      store.dispatch(actions.addUserBalance(userData.payload));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
