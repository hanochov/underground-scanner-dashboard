import { configureStore } from "@reduxjs/toolkit";
import scanEventsReducer from "./slices/scanEventsSlice";

export const store = configureStore({
  reducer: {
    scanEvents: scanEventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
