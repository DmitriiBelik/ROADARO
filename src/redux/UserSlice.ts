import { createSlice, } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./Store";

const initialState = {
    userState: {},
    userParams: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userFetched:(state, action) => {
            state.userState = action.payload;
        },
        userLogOut:(state) => {
            state.userState = {};
        },
        userParamsFetched: (state, action) => {
            state.userParams = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.user,
          };
        },
    }
});

export const { userFetched, userLogOut, userParamsFetched } = userSlice.actions;

export const selectAuthState = (state: AppState) => state.user;


export default userSlice.reducer;