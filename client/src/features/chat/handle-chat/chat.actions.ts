import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createChatAsync = createAsyncThunk(
    'chat/create-room',
    async(recipient_id : number, thunkApi) =>{
        try{
            const response = await api.post('/chat', {recipient_id})
            return response.data

        } catch (err:any) {
            return thunkApi.rejectWithValue(
                err?.resoponse?.data || 'something went wrong'
            )
        }
    }
)

export const getRoomAsync = createAsyncThunk(
    'chat/get-rooms',
    async(_, thunkApi) =>{
        try{

            const response = await api.get('/chat/user')

            return response.data

        } catch (err:any) {
            return thunkApi.rejectWithValue(
                err?.resoponse?.data || 'something went wrong'
            )
        }
    }
)