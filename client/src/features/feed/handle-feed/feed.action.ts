import { api } from "@/app/api/api";
import { Inputs } from "@/app/ui/create-post/create-post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LikeOutput } from "./feed.type";


export const fetchAllFeedAsync = createAsyncThunk(
    'feed/fetchAllFeed',
    async(_, thunkApi) => {
        try{
            const response = await api.get("/posts");
            console.log("response", response.data)
            return response.data

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)

export const likeAsync = createAsyncThunk(
    'feed/like',
    async(id: number, thunkApi) => {
        try{
            const response = await api.get(`/likes/${id}`);
            console.log("response", response.data)
            const output : LikeOutput = {
                id, data : response.data
            }

            return  output ?? {}

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)

export const createPostAsync = createAsyncThunk(
    'feed/createPost',
    async(data : Inputs ,thunkApi) => {
        try{
            const response = await api.post("/posts", data);
            console.log("response", response.data)
            return response.data

        } catch(error : any) {
            thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }
    }
)