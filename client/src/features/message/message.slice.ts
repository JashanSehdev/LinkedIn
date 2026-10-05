import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "@/types/chat";
import {  createMessageAsync, fetchChatMessageAsync } from "./handle-message/message.action";

type InitialState = {
  messages : Message[];
};

const initialState: InitialState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setMessage (state, action) {
      state.messages.push(action.payload)
    }
  },
  extraReducers: (builder) => {


    builder.addCase(fetchChatMessageAsync.fulfilled, (state, action : PayloadAction<Message[]>) => {
        state.messages = action.payload
    })

    .addCase(createMessageAsync.fulfilled, (state, action : PayloadAction<Message>) => {
        state.messages.push(action.payload)
    })
  }
});

export const {setMessage} = messageSlice.actions

export default messageSlice.reducer;
