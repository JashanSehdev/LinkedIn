import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "@/types/notification.type";
import { fetchNotificationAsync } from "./handle-notification/notification.action";

type InitialState = {
  notifications : Notification[];
};

const initialState: InitialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  
  extraReducers:(builder) => {
    builder.addCase(fetchNotificationAsync.fulfilled, (state, action) =>  {
        state.notifications = action.payload
    })
  }
});

export default notificationSlice.reducer;
