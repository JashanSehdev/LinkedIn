import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Post } from "@/types/feed";
import { createPostAsync, fetchAllFeedAsync, likeAsync } from "./handle-feed/feed.action";
import { Like, LikeOutput } from "./handle-feed/feed.type";

type InitialState = {
    feeds: Post[]
}

const initialState : InitialState = {
    feeds : []
}

const feedSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
 
        builder
        .addCase(fetchAllFeedAsync.fulfilled, (state, action) => {
            state.feeds = action.payload
        })

        .addCase(createPostAsync.fulfilled, (state, action) => {
            state.feeds.push(action.payload)
        })

        .addCase(likeAsync.fulfilled, (state, action: PayloadAction<Like> ) => {
            const like = action.payload
            
            const post = state.feeds.find((feed) => feed.id === like.postId);

            if (!post) return
            if (like.isDeleted) {
                post.likes = post.likes.filter((item) => like.id !== item.id)
            } else {
                const {isDeleted, ...liked} = like
                post.likes.push(liked)
            }
            
        })
    }
}) 

export default feedSlice.reducer