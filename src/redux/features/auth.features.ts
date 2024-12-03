/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  token: null | string;
}
const initialState: IState = {
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});
export default authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface IState {
//   token: string | null;
// }
// const initialState: IState = {
//   token: null,
// };
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<string>) => {
//       state.token = action.payload;
//     },
//     removeToken: (state) => {
//       state.token = null;
//     },
//   },
// });

// export default authSlice.reducer;
// export const { setToken, removeToken } = authSlice.actions;
