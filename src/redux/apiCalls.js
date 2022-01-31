import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { signIn, signUp } from "../services/authService";
import {
  getCampListService,
  fetchCampInfoService,
  updateCampInfoService,
  createCampInfoService
} from "../services/campService";
import {
  getAllCampStart,
  getAllCampSuccess,
  getAllCampFailure,
  getCampStart,
  getCampSuccess,
  getCampFailure,
  updateCampStart,
  updateCampSuccess,
  updateCampFailure,
  createCampStart,
  createCampSuccess,
  createCampFailure
} from "./campSlice";
import {
  getActiveContestsSuccess,
  getActiveContestsStart,
  getActiveContestsFailure
} from "./contestSlice";
import { fetchActiveContests } from "services/contestService";

//login user
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await signIn(user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//register user
export const register = async user => {
  // dispatch(loginStart());
  try {
    const res = await signUp(user);
    // dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    // dispatch(loginFailure());
  }
};

//get camp List
export const getAllCamps = async dispatch => {
  console.log("Dispatch", dispatch);
  dispatch(getAllCampStart());
  try {
    const res = await getCampListService();
    dispatch(getAllCampSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    dispatch(getAllCampFailure());
  }
};

//get camp
export const getCampInfo = async (dispatch, id) => {
  console.log("Dispatch", dispatch, id);
  dispatch(getCampStart());
  try {
    // const res = await getCampList();
    const res = await fetchCampInfoService(id);
    dispatch(getCampSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    dispatch(getCampFailure());
  }
};

//update camp
export const updateCampInfo = async (dispatch, id, body) => {
  console.log("Dispatch", dispatch, id);
  dispatch(updateCampStart());
  try {
    // const res = await updateCampList();
    const res = await updateCampInfoService(id, body);
    dispatch(updateCampSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    dispatch(updateCampFailure());
  }
};

//create camp
export const createCampInfo = async (dispatch, body) => {
  console.log("Dispatch", dispatch, body);
  dispatch(createCampStart());
  try {
    // const res = await updateCampList();
    const res = await createCampInfoService(body);
    dispatch(createCampSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    dispatch(createCampFailure());
  }
};

//get active contests
export const getActiveContests = async dispatch => {
  dispatch(getActiveContestsStart());
  try {
    const res = await fetchActiveContests();
    dispatch(getActiveContestsSuccess(res.data));
  } catch (error) {
    console.log("Error", error);
    dispatch(getActiveContestsFailure());
  }
};
