import configureMockStore from "redux-mock-store";
import expect from "expect";
import thunk from "redux-thunk";
import * as actions from "../actions";
import * as types from "../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("rent/cart actions", () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe("store rent", () => {
    it("should store rent values", () => {
      const rentValues = { userId: 1, moviesId: "1", seriesId: "2" };

      const expectedActions = [
        {
          type: types.ORDER_CART_ITEMS
        }
      ];

      store.dispatch(actions.storeRent(rentValues)).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });
  });

  describe("return rent", () => {
    it("should return rent values", () => {
      const returnValues = {
        type: types.RETURN_ORDER,
        payload: { rentId: 123, id: "tok12345visa" }
      };

      const expectedActions = [
        {
          type: types.RETURN_ORDER,
          payload: returnValues.payload
        }
      ];

      store.dispatch(actions.returnRent(returnValues)).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });
  });

  describe("get rents/rent/user Rents", () => {
    it("should get all rents", () => {
      const expectedActions = [
        {
          type: types.GET_ORDERS
        }
      ];

      store.dispatch(actions.getRents()).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });

    it("should get rent by id", () => {
      const rentData = { type: types.GET_ORDER, payload: { id: 1 } };

      const expectedActions = [
        {
          type: types.GET_ORDER,
          payload: rentData.payload
        }
      ];

      store.dispatch(actions.getRent(rentData.payload)).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });

    it("should get user rents by user id", () => {
      const userData = { type: types.GET_USER_ORDERS, payload: { id: 1 } };

      const expectedActions = [
        {
          type: types.GET_USER_ORDERS,
          payload: userData.payload
        }
      ];

      store.dispatch(actions.getRent(userData.payload)).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });
  });

  describe("add/remove/calculate cart items", () => {
    it("should add values to cart", () => {
      const cartValues = [
        {
          type: types.ADD_TO_CART,
          payload: {
            id: 1,
            title: "daredevil",
            stock: 1,
            genre: "Action",
            released: "25/12/2018"
          }
        },
        {
          type: types.ADD_TO_CART,
          payload: {
            id: 2,
            title: "batman",
            stock: 2,
            genre: "Action",
            released: "25/12/2018"
          }
        }
      ];

      const expectedActions = [
        {
          type: types.ADD_TO_CART,
          payload: cartValues[0].payload
        },
        {
          type: types.ADD_TO_CART,
          payload: cartValues[1].payload
        }
      ];

      store
        .dispatch(
          actions.addToCart({
            ...cartValues[0].payload,
            ...cartValues[1].payload
          })
        )
        .then(() => {
          expect(store.getActions().toEqual(expectedActions));
        });
    });

    it("should get all cart items", () => {
      const expectedActions = [
        {
          type: types.GET_CART
        }
      ];

      store.dispatch(actions.getCart()).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });

    it("should calculate total cart amount", () => {
      const cartTotal = {
        type: types.CALCULATE_CART_TOTAL,
        payload: { total: 10 }
      };

      const expectedActions = [
        {
          type: types.CALCULATE_CART_TOTAL,
          payload: cartTotal.payload
        }
      ];

      store.dispatch(actions.cartTotalAmount(cartTotal.payload)).then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    });

    it("should remove movie from cart", () => {
      const movieCart = {
        type: types.REMOVE_MOVIE_CART_ITEM,
        payload: { movieId: 1 }
      };

      const expectedActions = [
        {
          type: types.REMOVE_MOVIE_CART_ITEM,
          payload: movieCart.payload
        }
      ];

      store
        .dispatch(actions.removeMovieFromCart(movieCart.payload))
        .then(() => {
          expect(store.getActions().toEqual(expectedActions));
        });
    });

    it("should remove serie from cart", () => {
      const serieCart = {
        type: types.REMOVE_SERIE_CART_ITEM,
        payload: { serieId: 2 }
      };

      const expectedActions = [
        {
          type: types.REMOVE_SERIE_CART_ITEM,
          payload: serieCart.payload
        }
      ];

      store
        .dispatch(actions.removeSerieFromCart(serieCart.payload))
        .then(() => {
          expect(store.getActions().toEqual(expectedActions));
        });
    });
  });
});
