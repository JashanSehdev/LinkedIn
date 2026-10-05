import { api } from "@/app/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createConnectionAsync = createAsyncThunk(
  "connection/accept",
  async (id: number, thunkApi) => {
    try {
      const response = await api.post(`/connections/`, {receiverId : id});
      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "somthing went wrong",
      );
    }
  },
);



export const acceptConnectionAsync = createAsyncThunk(
  "connection/accept",
  async (id: number, thunkApi) => {
    try {
      const response = await api.patch(`/connections/${id}`, {
        status: "ACCEPTED",
      });

      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "somthing went wrong",
      );
    }
  },
);

export const deleteConnectionAsync = createAsyncThunk(
  "connection/accept",
  async (id: number, thunkApi) => {
    try {
      const response = await api.delete(`/connections/${id}`);

      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "somthing went wrong",
      );
    }
  },
);

export const fetchConnectionAsync = createAsyncThunk(
  "connection/accept",
  async (_, thunkApi) => {
    try {
      const response = await api.get(`/connections/user`);

      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);
