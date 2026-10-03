import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCompaniesAsync, GetUserCompanyAsync } from "./handle-job/job.action";
import { Company } from "@/types/job";

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


    builder.addCase(fetchCompaniesAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
        state.companies= action.payload
    })
    
    .addCase(GetUserCompanyAsync.fulfilled, (state, action : PayloadAction<Company[]>) => {
      state.companies = action.payload
    })
  }
});

export default jobSlice.reducer;
