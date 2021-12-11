import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";
import {
  loadTransOrdersStart,
  loadTransOrdersSuccess,
  loadTransOrdersFailure,
  addOrderToTrans,
  removeOrderFromTrans,
} from "./transOrderRedux";
import {
  loadFinishedOrdersStart,
  loadFinishedOrdersSuccess,
  loadFinishedOrdersFailure,
  addOrderToFinished,
} from "./finishedOrderRedux";

import {
  addOrderToWait,
  loadWaitOrdersFailure,
  loadWaitOrdersStart,
  loadWaitOrdersSuccess,
  removeOrderFromWait,
} from "./waitOrderRedux";

import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  localStorage.removeItem("persist:root");
  dispatch(logoutSuccess());
};

export const loadWaitOrders = async (dispatch, user_id) => {
  loadWaitOrdersStart();
  try {
    const res = await publicRequest.get(`/store/wait_orders/${user_id}`);
    dispatch(loadWaitOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadWaitOrdersFailure());
  }
};

export const loadTransOrders = async (dispatch, user_id) => {
  loadTransOrdersStart();
  try {
    const res = await publicRequest.get(`/store/trans_orders/${user_id}`);
    dispatch(loadTransOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadTransOrdersFailure());
  }
};

export const loadFinishedOrders = async (dispatch, user_id) => {
  loadFinishedOrdersStart();
  try {
    const res = await publicRequest.get(`/store/finished_orders/${user_id}`);
    dispatch(loadFinishedOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadFinishedOrdersFailure());
  }
};
