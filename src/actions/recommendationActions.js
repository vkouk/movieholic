import axios from "axios";
import { Config } from "../utils/Config";
import {
  GET_USER_RECOMMENDATIONS,
  CLEAR_RECOMMENDATIONS,
  FETCH_ERROR
} from "./types";

export const getUserRecommendations = userId => async dispatch => {
  await axios
    .post(`${Config.API_URL}/recommendations`, userId)
    .then(({ data }) =>
      dispatch({ type: GET_USER_RECOMMENDATIONS, payload: data })
    )
    .catch(error =>
      dispatch({ type: FETCH_ERROR, payload: error.response.data })
    );
};

export const clearRecommendations = () => async dispatch => {
  dispatch({ type: CLEAR_RECOMMENDATIONS });
};
