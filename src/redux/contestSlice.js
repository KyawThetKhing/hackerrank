import { createSlice } from "@reduxjs/toolkit";

const contestSlice = createSlice({
  name: "contests",
  initialState: {
    activeContests: [],
    archivedContests: {},
    isFetching: false,
    error: false
  },
  reducers: {
    getActiveContestsStart: state => {
      state.isFetching = true;
    },
    getActiveContestsSuccess: (state, action) => {
      state.isFetching = false;
      state.activeContests = action.payload;
    },
    getActiveContestsFailure: state => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  getActiveContestsStart,
  getActiveContestsSuccess,
  getActiveContestsFailure
} = contestSlice.actions;
export default contestSlice.reducer;
