import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/themeSlice";
import { languageSlice } from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    language: languageSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
