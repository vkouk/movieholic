import {
  ADD_TO_CART,
  CALCULATE_CART_TOTAL,
  GET_CART,
  ORDER_CART_ITEMS,
  GET_ORDER,
  GET_ORDERS,
  GET_USER_ORDERS,
  REMOVE_MOVIE_CART_ITEM,
  REMOVE_SERIE_CART_ITEM,
  RETURN_ORDER,
  ORDER_ERROR
} from "../actions/types";

const initialState = {
  cart: {},
  orders: [],
  order: {},
  userOrders: [],
  cartTotal: 0,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: { ...action.payload }, error: "" };
    case CALCULATE_CART_TOTAL:
      return { ...state, cartTotal: action.payload };
    case GET_CART:
      return { ...state, cart: { ...state.cart } };
    case ORDER_CART_ITEMS:
      return { ...state, cart: {}, cartTotal: 0, error: "" };
    case RETURN_ORDER:
      return { ...state, error: "" };
    case GET_ORDER:
      return { ...state, order: action.payload };
    case GET_ORDERS:
      return { ...state, orders: action.payload };
    case GET_USER_ORDERS:
      return { ...state, userOrders: action.payload };
    case REMOVE_MOVIE_CART_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          movie: state.cart.movie.filter(data => data._id !== action.payload)
        }
      };
    case REMOVE_SERIE_CART_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          serie: state.cart.serie.filter(data => data._id !== action.payload)
        }
      };
    case ORDER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
