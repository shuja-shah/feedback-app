import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_ORDERS = "feedback-app/GET_ORDERS";
const GET_BUSSNIESS = "feedback-app/GET_BUSSNIESS";

export const ENDPOINT = "http://localhost:8888";

export const getBussniess = createAsyncThunk(
  GET_BUSSNIESS,
  async (thunkAPI) => {
    const response = await fetch(`${ENDPOINT}/api/contact/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  }
);



export const getOrder = createAsyncThunk(
  GET_BUSSNIESS,
  async (meta, thunkAPI) => {
    const response = await fetch(`${ENDPOINT}/api/contact/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  }
);

const intialState = {
  bussniess: null,
  order: null,
  loading: false,
  error: null,
};

const FdBkConfig_Reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_BUSSNIESS:
      return {
        ...state,
        bussniess: action.payload,
      };

    case GET_ORDERS:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default FdBkConfig_Reducer;
