import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type Language = "en" | "pl" | "ua" | "ru";
interface LanguageState {
  lang: Language;
}

const initialState: LanguageState = {
  lang: "en",
} satisfies LanguageState as LanguageState;

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.lang;
export default languageSlice.reducer;
