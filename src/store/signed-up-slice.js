import { createSlice } from "@reduxjs/toolkit";

const signedUpSlice = createSlice({
  name: "signedUp",
  initialState: { signedUp: false },
  reducers: {
    toggle(state) {
      state.signedUp = true;
    },
  },
});

export const signUpActions = signedUpSlice.actions;
export default signedUpSlice;
