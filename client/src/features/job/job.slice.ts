import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCompaniesAsync, fetchJobs, getPublicCompaniesAsync, GetUserCompanyAsync } from "./handle-job/job.action";
import { Company, Job } from "@/types/job";

type InitialState = {
  user_companies : Company[];
  all_companies : Company[];
  jobs : Job[]
};

const initialState: InitialState = {
  user_companies: [],
  all_companies: [],
  jobs : []
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(fetchCompaniesAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
        state.user_companies= action.payload
    })
    
    .addCase(GetUserCompanyAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
      state.user_companies = action.payload
    })
    .addCase(getPublicCompaniesAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
      state.all_companies = action.payload
    })
    .addCase(fetchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
    })
  }
});

export default jobSlice.reducer;
