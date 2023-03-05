import { configureStore } from "@reduxjs/toolkit";
import signedUpSlice from "./signed-up-slice";
const store = configureStore({
  reducer: { signedUp: signedUpSlice.reducer },
});

export default store;
