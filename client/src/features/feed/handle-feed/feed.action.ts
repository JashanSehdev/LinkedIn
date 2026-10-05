import { api } from "@/app/api/api";
import { Inputs } from "@/app/ui/post-job/create-post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentInput, NestedCommentInput } from "./feed.type";

export const fetchAllFeedAsync = createAsyncThunk(
  "feed/fetchAllFeed",
  async (search: string | undefined, thunkApi) => {
    try {
      const response = await api.get("/posts", {
        params: {
          search: search,
        },
      });
      console.log("response", response.data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const likeAsync = createAsyncThunk(
  "feed/like",
  async ({ id, type = 1 }: { id: number; type: number }, thunkApi) => {
    try {
      const response = await api.get(`/likes/${id}`, {
        params: {
          type,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const createPostAsync = createAsyncThunk(
  "feed/createPost",
  async (data: Inputs, thunkApi) => {
    try {
      const response = await api.post("/posts", data);
      console.log("response", response.data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const createCommentAsync = createAsyncThunk(
  "feed/createComment",
  async (data: CommentInput, thunkApi) => {
    try {
      const response = await api.post("/comment", data);
      console.log("response", response.data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const createNestedCommentAsync = createAsyncThunk(
  "feed/createNestedComment",
  async (data: NestedCommentInput, thunkApi) => {
    try {
      const response = await api.post(`/comment/${data.parentId}`, data);
      console.log("response", response.data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const deleteCommentAsync = createAsyncThunk(
  "feed/deleteComment",
  async (
    { commentId, postId }: { commentId: number; postId: number },
    thunkApi,
  ) => {
    try {
      await api.delete(`/comment/${commentId}`);
      return { commentId, postId };
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data || "something went wrong",
      );
    }
  },
);

export const fetchPostCommentAsync = createAsyncThunk(
  "feed/fetch-feed-comment",
  async(postId : number, thunkApi) => {
    try{
          const response = await api.get(`/comment/post/${postId}`)

          return response.data
    } catch(error : any) {
      return thunkApi.rejectWithValue(
        error.response.data ?? 'something went wrong'
      )
    }
    
  }
)

export const fetchPostByIdAsync = createAsyncThunk(
  "feed/fetch-post-by-id",
  async(postId : number, thunkApi) => {
    try{
          const response = await api.get(`/posts/${postId}`)

          return response.data
    } catch(error : any) {
      return thunkApi.rejectWithValue(
        error.response.data ?? 'something went wrong'
      )
    }
    
  }
)
