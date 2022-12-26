import { createSlice, } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./Store";

const initialState = {
    projects: []
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        projectsFetched:(state, action) => {
            state.projects = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.projects,
          };
        },
    }
});

export const { projectsFetched } = projectsSlice.actions;

export default projectsSlice.reducer;