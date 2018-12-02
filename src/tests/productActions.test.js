import configureMockStore from "redux-mock-store";
import expect from "expect";
import thunk from "redux-thunk";
import * as actions from "../actions";
import * as types from "../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("movie/serie actions", () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe("fetch movies/series", () => {
    it("should fetch data", () => {
      const moviesData = {
        type: types.FETCH_MOVIES,
        payload: {
          id: 1,
          title: "batman",
          stock: 1,
          genre: "Action",
          released: "25/12/2018"
        }
      };
      const seriesData = {
        type: types.FETCH_SERIES,
        payload: {
          id: 1,
          title: "daredevil",
          stock: 1,
          genre: "Action",
          released: "25/12/2018"
        }
      };

      const expectedActions = [
        {
          type: types.FETCH_MOVIES,
          payload: moviesData.payload
        },
        {
          type: types.FETCH_SERIES,
          payload: seriesData.payload
        }
      ];

      store.dispatch(actions.fetchMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      store.dispatch(actions.fetchSeries()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should correct fetch data", () => {
      store.dispatch(actions.fetchMovies());
      store.dispatch(actions.fetchSeries());
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("fetch movie/serie by title", () => {
    it("should fetch data by title", () => {
      const moviesData = {
        type: types.GET_MOVIE,
        payload: { title: "batman" }
      };
      const seriesData = {
        type: types.GET_SERIE,
        payload: { title: "daredevil" }
      };

      const expectedActions = [
        {
          type: types.GET_MOVIE,
          payload: moviesData.payload
        },
        {
          type: types.GET_SERIE,
          payload: seriesData.payload
        }
      ];

      store.dispatch(actions.fetchMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      store.dispatch(actions.fetchSeries()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should correct fetch data by title", () => {
      store.dispatch(actions.getMovie("batman"));
      store.dispatch(actions.getSerie("daredevil"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
