import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

export interface userData {
  id: number;
  name: string;
  email: string;
}

export interface user {
  count: number;
  userData: userData[];
}

export const fetchGetData = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get<userData[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.data;
});

const initialData: user = {
  count: 0,
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    decrementUserCount: (state) => ({
      ...state,
      count: state.count - 1,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetData.fulfilled, (state, action) => {
      return {
        ...state,
        count: action.payload.length,
        userData: action.payload as userData[],
      };
    });
  },
});

export const { decrementUserCount } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
