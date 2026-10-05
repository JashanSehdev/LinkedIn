import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserType, LoginUserType } from "./auth.type";
import { redirect } from "next/navigation";
import { User } from "@/types/feed";
import { isAxiosError } from "axios";

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


type Data = {
    email : string,
    username : string
}
export const googleLoginAsync =  createAsyncThunk(
    'auth/googleLogin',
    
    async ( data : Data, thunkApi) => {
          try {
            const response = await api.post("/auth/google", data)
            console.log(response.data)
            // redirect("/")

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)


export const fetchUserByNameAsync = createAsyncThunk(
    'auth/fetch-user-by-name',
    async (username : string, thunkApi) => {
          try {
            const response = await api.get("/auth/users", {
                params: {
                    username
                }
            })
            
            return response.data

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)

export const fetchUserProfile = createAsyncThunk(
    'auth/fetch-user-profile',
    async(id:number, thunkApi) => {
try {
            const response = await api.get(`/auth/users/${id}`)
            
            return response.data

        } catch(error : any) {
            if (isAxiosError(error)) {
                console.log(error.message)
            }
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)