import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedPost } from "@/types/feed";
import { createPostAsync, fetchAllFeedAsync, likeAsync } from "./handle-feed/feed.action";
import { LikeOutput } from "./handle-feed/feed.type";

type InitialState = {
    feeds: FeedPost[]
}

const initialState : InitialState = {
    feeds : []
}

const feedSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
 
        builder.addCase(fetchAllFeedAsync.fulfilled, (state, action) => {
            state.feeds = action.payload
        });

        builder.addCase(createPostAsync.fulfilled, (state, action) => {
            state.feeds.push(action.payload)
        });

        // builder.addCase(likeAsync.fulfilled, (state, action ) => {
        //     const post = state.feeds.find((feed) => feed.id === action?.payload?.id)

        //     if (post.likes.include ())
        // })
    }
}) 

export default feedSlice.reducer