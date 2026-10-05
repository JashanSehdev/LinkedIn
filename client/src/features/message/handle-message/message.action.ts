import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChatMessageAsync = createAsyncThunk(
  "message/get-chat-message",
  async (chatId : number, thunkApi) => {
    try {
      const response = await api.get(`/message/chat/${chatId}`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
);

type CreateMessage = {
    chat_id : number,
    text : string,
    files ?: File[]
}

type File = {
  file_name : string,
  file_type : string,
  file_size : number,
  file_url : string
}

export const createMessageAsync = createAsyncThunk(
  "message/create-message",
  async (createMessage :CreateMessage, thunkApi) => {
    try {
      const response = await api.post(`/message`, createMessage);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
);