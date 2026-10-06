import { api } from "@/app/api/api";
import { CreateCompany } from "./job.type";
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

export const GetUserCompanyAsync = createAsyncThunk(
  "job/get-user-company",
  async (_, thunkApi) => {
    try {
      const response = await api.get("/companies/user", {

      });

      console.log("Job Created");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
);

export const getPublicCompaniesAsync = createAsyncThunk(
  'job/get-public-company',
  async (_, thunkApi) => {
    try {
      const response = await api.get("/companies/", {
      });
      console.log("Job Created");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  },
)

export const fetchJobs = createAsyncThunk(
  'job/fetch-all-jobs', 
  async (_, thunkApi) => {
    try {
      const response = await api.get("/jobs")
      return response.data
    }catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  }
)

export const fetchJobByIdAsync = createAsyncThunk(
  'job/fetch-job-by-Id', 
  async (id : number, thunkApi) => {
    try {
      const response = await api.get(`/jobs/user/${id}`)
      return response.data
    }catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  }
)

export const applyJobAsync = createAsyncThunk(
  'job/apply-to-job',
  async(jobId: number, thunkApi) => {
    try {
      const response = await api.post(`/applied_job`, {jobId})
      return response.data
    }catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || "something went wrong");
    }
  }
)