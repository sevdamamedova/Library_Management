import { createSlice } from "@reduxjs/toolkit";
//Asagidaki commetler numune kimi yazilib

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    // services: [],
  },
  reducers: {
    //resp.data=action.payload
    // getServicesFunc: (state, action) => {
    //   state.services = action.payload;
    // },
  },
});

export const HomeReducer = HomeSlice.reducer;
export const { getServicesFunc } = HomeSlice.actions;
// export const {getServicesFunc } = HomeSlice.actions; burda funksiyalar eksport edilir
