import { createSlice } from "@reduxjs/toolkit";
const w = createSlice({
  name: "w",
  initialState: { g: 11, h: 7, m: 3, j: 5 },
  reducers: {
    t: (rl) => {
      rl.g += rl.h;
    },
    v: (rl, { payload }) => {
      rl.g -= payload;
    },
  },
});

export const { t, v } = w.actions;
export default w.reducer;