import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Option } from "react-tailwindcss-select/dist/components/type";

const initialState: Option = {
  value: "all",
  label: "All",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<any>) => {
      state.value = action.payload.value;
      state.label = action.payload.label;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
