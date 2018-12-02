import axios from "axios";
import { Config } from "../utils/Config";
import { FETCH_MOVIES, GET_MOVIE, FETCH_ERROR } from "./types";

export const fetchMovies = () => async dispatch => {
  await axios
    .get(`${Config.API_URL}/movie`)
    .then(({ data }) => dispatch({ type: FETCH_MOVIES, payload: data }))
    .catch(error =>
      dispatch({ type: FETCH_ERROR, payload: error.response.data })
    );
};

export const getMovie = title => async dispatch => {
  await axios
    .get(`${Config.API_URL}/movie/${title}`)
    .then(({ data }) => dispatch({ type: GET_MOVIE, payload: data }))
    .catch(error =>
      dispatch({ type: FETCH_ERROR, payload: error.response.data })
    );
};
