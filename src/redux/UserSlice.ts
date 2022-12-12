import { createSlice, } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./Store";

const initialState = {
    userState: {},
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

export const { userFetched, userLogOut } = userSlice.actions;

export const selectAuthState = (state: AppState) => state.user;


export default userSlice.reducer;