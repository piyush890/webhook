import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./indexReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;