import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "./loginAPI";

const initialState = {
  login: false,
};
console.log("hitt");

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signIn: (state) => {
      state.login = true;
    },
    signOut: (state) => {
      state.login = false;
    },
  },
});
export const { signIn, signOut } = authenticationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export const loginState = (state) => state.authentication.login;

export default authenticationSlice.reducer;
