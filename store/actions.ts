import * as types from "../constants/types";

export const setError = () => (dispatch: (arg0: { type: string }) => any) =>
  dispatch({
    type: types.ERROR,
  });

export const setPending = () => (dispatch: (arg0: { type: string }) => any) =>
  dispatch({
    type: types.PENDING,
  });

export const getUsersList = () => (
  dispatch: (arg0: {
    type: string;
    payload: { name: string; lastName: string; id: string }[];
  }) => void
) =>
  setInterval(() => {
    dispatch({
      type: types.SETCLIENTLIST,
      payload: [
        { name: "Martin", lastName: "Guena", id: "001" },
        { name: "Pedro", lastName: "Lopez", id: "002" },
        { name: "Obi", lastName: "One", id: "003" },
      ],
    });
  }, 1000);
