import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserByNameAsync, getUserAsync, loginUserAsync, signupUserAsync } from "./handle-auth/auth.action";

type InitialState = {
    user: User | null;
    users: User[]
}

const initialState : InitialState = {
    user : null,
    users: []
}

const authSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(signupUserAsync.fulfilled, (state, action) => {
            state.user = action.payload
        });

        builder.addCase(loginUserAsync.fulfilled, (state, action) => {
            state.user = action.payload
        })

        .addCase(getUserAsync.fulfilled, (state, action) => {
            state.user = action.payload
        })

        .addCase(fetchUserByNameAsync.fulfilled,  (state, action ) => {
            if (!action.payload) return;
            state.users = action.payload
        })
    }
}) 

export default authSlice.reducer