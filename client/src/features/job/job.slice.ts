import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Post } from "@/types/feed";
import { Company } from "@/types/job";
import { createCompanyAsync, createJobAsync, fetchCompaniesAsync } from "./handle-job/job.action";


type InitialState = {
  companies : Company[];
};

const initialState: InitialState = {
  companies: [],
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // builder.addCase(createCompanyAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
    //     state.companies = action.payload
    // })
    builder.addCase(fetchCompaniesAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
        state.companies= action.payload
    })
    .addCase(createJobAsync.fulfilled, (state, action ) => {

    })
  }
});

export default jobSlice.reducer;
