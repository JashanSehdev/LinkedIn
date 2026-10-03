import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchFollowers = createAsyncThunk(
    'follow/fetch-followers',
    async(_, thunkApi) => {

        try{
            const response = await api.get('/follow/followers')

            return response.data
        } catch(error : any) {
            return thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }

    }
)

export const fetchFollowings = createAsyncThunk(
    'follow/fetch-followings',
    async(_, thunkApi) => {

        try{
            const response = await api.get('/follow/followings')

            return response.data
        } catch(error : any) {
            return thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }

    }
)

export const toggleFollow = createAsyncThunk(
    'follow/toggle-follow',
    async(followedId : number, thunkApi) => {

        try{
            const response = await api.post('/follow/toggle', {followedId})

            return response.data
        } catch(error : any) {
            return thunkApi.rejectWithValue(
                error?.response?.data || 'something went wrong'
            )
        }

    }
)