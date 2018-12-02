import axios from "axios";
import { Config } from "../utils/Config";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, UPDATE_USER } from "./types";
import setAuthToken from "../utils/AuthToken";

export const loginUser = ({ email, password }) => async dispatch => {
  await axios
    .post(`${Config.API_URL}/user/login`, { email, password })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);
      dispatch({ type: AUTH_USER, payload: data.user });
    })
    .catch(error =>
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    );
};

export const registerUser = (userData, history) => async dispatch => {
  await axios
    .post(`${Config.API_URL}/user/register`, userData)
    .then(() => history.push("/"))
    .catch(error =>
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    );
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch({ type: UNAUTH_USER, payload: {} });
};

export const getProfile = id => async dispatch => {
  await axios
    .get(`${Config.API_URL}/user/profile/${id}`)
    .then(({ data }) => dispatch({ type: AUTH_USER, payload: data }))
    .catch(error =>
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    );
};

export const updateProfile = (profileValues, id) => async dispatch => {
  await axios
    .post(`${Config.API_URL}/user/profile/${id}`, profileValues)
    .then(({ data }) => dispatch({ type: UPDATE_USER, payload: data }))
    .catch(error =>
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    );
};

export const addUserBalance = values => async dispatch => {
  await axios
    .post(`${Config.API_URL}/user/addbalance`, values)
    .then(({ data }) => dispatch({ type: UPDATE_USER, payload: data }))
    .catch(error =>
      dispatch({ type: AUTH_ERROR, payload: error.response.data })
    );
};
