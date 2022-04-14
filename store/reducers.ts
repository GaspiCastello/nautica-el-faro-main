/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import * as types from '../constants/types';

// INITIAL TIMER STATE
const initialTimerState = {
  clientList: [],
  pending: false,
  error: false,
};

export interface rootState {
  clientList: Array<any>;
  error: boolean;
  pending: boolean;
}

// CLIENT LIST REDUCER
const clientList = (state: rootState = initialTimerState, { type, payload }: Action): rootState => {
  switch (type) {
    case types.ERROR:
      return {
        ...state,
        error: true,
      };
    case types.SETCLIENTLIST:
      return {
        ...state,
        clientList: payload,
        error: false,
        pending: false,
      };
    case types.PENDING:
      return {
        ...state,
        error: false,
        pending: true,
      };
    default:
      return state;
  }
};
// COMBINED REDUCERS
const reducers = {
  clientList: clientList,
};

export default combineReducers(reducers);
