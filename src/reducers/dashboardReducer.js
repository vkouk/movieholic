import {
  FETCH_DASHBOARD_ORDERS,
  FETCH_DASHBOARD_MEMBERS,
  FETCH_DASHBOARD_MOST_RENTED,
  FETCH_ERROR
} from "../actions/types";

const initialState = {
  orders: {},
  members: {},
  mostRented: {},
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_ORDERS:
      return { ...state, orders: action.payload, error: "" };
    case FETCH_DASHBOARD_MEMBERS:
      return { ...state, members: action.payload, error: "" };
    case FETCH_DASHBOARD_MOST_RENTED:
      return { ...state, mostRented: action.payload, error: "" };
    case FETCH_ERROR:
      return {
        ...state,
        orders: {},
        members: {},
        mostRented: {},
        error: action.payload
      };
    default:
      return state;
  }
};
