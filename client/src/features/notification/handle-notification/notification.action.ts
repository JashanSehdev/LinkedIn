import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotificationAsync = createAsyncThunk("notification/fetch-notification", async (_, thunkApi) => {
  try {
    const response = await api.get("notification/user");
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
  }
});