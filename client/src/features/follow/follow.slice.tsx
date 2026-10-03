import { createSlice} from "@reduxjs/toolkit";
import { Follow } from "@/types/follow";
import { fetchFollowers, fetchFollowings, toggleFollow } from "./handle-follow/follow.action";

type InitialState = {
  Followers: Follow[];
  Followings: Follow[];
};

const initialState: InitialState = {
  Followers: [],
  Followings: [],
};

const followSlice = createSlice({
  name: "followSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowers.fulfilled, (state, action)=> {
        state.Followers = action.payload
    })
    .addCase(fetchFollowings.fulfilled, (state, action) => {
        state.Followings = action.payload
    })
    .addCase(toggleFollow.fulfilled, (state, action) => {
      const result = action.payload
        if (result.removed){
            state.Followings = state.Followings.filter((item) => item.id !== result.id)
        } else {
          const {removed,  ...follow} = result
          state.Followings.push(follow)
        }
    })
  },
});

export default followSlice.reducer;
