import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    fetching: true,
    error: false,
  },
  reducers: {
    startFetching: (state) => {
      state.fetching = true;
      state.error = false;
    },
    error: (state) => {
      state.error = true;
      state.fetching = false;
    },
    setProjects: (state, action) => {
      state.error = false;
      state.fetching = false;
      state.projects = action.payload;
    },
  },
});

export const { startFetching, error, setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
