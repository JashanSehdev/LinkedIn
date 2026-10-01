import { api } from "@/app/api/api";
import { CreateCompany } from "@/app/ui/Jobs/create-company-modal/create-company-type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateJob } from "./job.type";

export const createCompanyAsync = createAsyncThunk(
  "job/create-company",
  async (data: CreateCompany, thunkApi) => {
    try {
      const response = await api.post("companies", data);

      console.log("Company Created");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
);

export const fetchCompaniesAsync = createAsyncThunk("job/fetch-company", async (_, thunkApi) => {
  try {
    const response = await api.get("companies");
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
  }
});

export const createJobAsync = createAsyncThunk(
  "job/create-job",
  async (data: CreateJob, thunkApi) => {
    try {
      const response = await api.post("jobs", data);

      console.log("Job Created");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
);
