import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Dialog {
  isOpen: boolean;
}

const initialState: Dialog = {
  isOpen: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    dialogHandler: (state,action) => {
      state.isOpen = action.payload
    },
   
  },
});

export const { dialogHandler } = dialogSlice.actions;

export default dialogSlice.reducer;
