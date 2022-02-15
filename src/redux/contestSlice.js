import { createSlice } from "@reduxjs/toolkit";

const contestSlice = createSlice({
  name: "contests",
  initialState: {
    activeContests: [],
    archivedContests: [],
    page: 0,
    limit: 5,
    totalCount: 12,
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
    },
    getArchivedContestsStart: state => {
      state.isFetching = true;
      state.page += 1;
    },
    getArchivedContestsSuccess: (state, action) => {
      state.isFetching = false;
      state.archivedContests = action.payload;
    },
    getArchivedContestsFailure: state => {
      state.isFetching = false;
      state.error = true;
      state.page -= 1;
    }
  }
});

export const {
  getActiveContestsStart,
  getActiveContestsSuccess,
  getActiveContestsFailure,
  getArchivedContestsStart,
  getArchivedContestsSuccess,
  getArchivedContestsFailure
} = contestSlice.actions;
export default contestSlice.reducer;
