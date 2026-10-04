import { chatRoom } from "@/types/chat";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {  getRoomAsync } from "./handle-chat/chat.actions";


type InitialState = {
    chatRoom: chatRoom[]
};

const initialState: InitialState = {
    chatRoom: []
};

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomAsync.fulfilled, (state, action : PayloadAction<chatRoom[]>) => {
        state.chatRoom = action.payload
    })

  }
});

export default chatSlice.reducer;
