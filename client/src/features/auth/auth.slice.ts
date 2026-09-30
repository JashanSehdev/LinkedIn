import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync, loginUserAsync, signupUserAsync } from "./handle-auth/auth.action";

type InitialState = {
    user: User | null
}

const initialState : InitialState = {
    user : null
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

         builder.addCase(getUserAsync.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
}) 

export default authSlice.reducer