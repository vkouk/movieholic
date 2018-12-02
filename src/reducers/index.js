import { combineReducers } from "redux";
import authReducer from "./authReducer";
import rentReducer from "./rentReducer";
import movieReducer from "./movieReducer";
import serieReducer from "./serieReducer";
import recommendationReducer from "./recommendationReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  auth: authReducer,
  rent: rentReducer,
  movie: movieReducer,
  serie: serieReducer,
  recommendation: recommendationReducer,
  dashboard: dashboardReducer
});
