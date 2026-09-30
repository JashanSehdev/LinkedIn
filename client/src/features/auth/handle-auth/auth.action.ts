import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserType, LoginUserType } from "./auth.type";
import { redirect } from "next/navigation";

export const signupUserAsync = createAsyncThunk(
    'auth/login',
    async (user : CreateUserType , thunkApi) => {
        try {
            const response = await api.post("/auth/register", user)
            return response.data

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)


export const loginUserAsync =  createAsyncThunk(
    'auth/signup',
    async (user : LoginUserType, thunkApi) => {
          try {
            const response = await api.post("/auth/login", user)
            return response.data;

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)

export const getUserAsync =  createAsyncThunk(
    'auth/me',
    async (_, thunkApi) => {
          try {
            const response = await api.get("/auth/me")
            return response.data;

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)

export const logoutUserAsync =  createAsyncThunk(
    'auth/signup',
    async (_, thunkApi) => {
          try {
            const response = await api.get("/auth/logout")
            redirect("/")

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)