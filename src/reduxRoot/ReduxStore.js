import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
