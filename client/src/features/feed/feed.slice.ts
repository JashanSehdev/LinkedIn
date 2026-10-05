import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, Post } from "@/types/feed";
import {
  createCommentAsync,
  createPostAsync,
  deleteCommentAsync,
  fetchAllFeedAsync,
  likeAsync,
} from "./handle-feed/feed.action";
import { Like } from "./handle-feed/feed.type";
import { Replace } from "lucide-react";
import { toggleFollow } from "../follow/handle-follow/follow.action";

type InitialState = {
  feeds: Post[];
};

const initialState: InitialState = {
  feeds: [],
};

const feedSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFeedAsync.fulfilled, (state, action) => {
        state.feeds = action.payload;
      })

      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.feeds.push(action.payload);
      })

      .addCase(likeAsync.fulfilled, (state, action: PayloadAction<Like>) => {
        const like = action.payload;

        const post = state.feeds.find((feed) => feed.id === like.postId);

        if(!post) return
        if (like.status === "deleted") {
          // post.likes = post.likes.filter((item) => item.id !== like.id);
          // return;
          post.userLike = null
          return
        }

        const { status, ...liked } = like;

        post.userLike = liked
      })

      .addCase(
        createCommentAsync.fulfilled,
        (state, action: PayloadAction<Comment>) => {
          const post = state.feeds.find(
            (item) => item.id === action.payload.postId,
          );

          post?.comments.push(action.payload);
        },
      )

      .addCase(
        deleteCommentAsync.fulfilled,
        (
          state,
          action: PayloadAction<{ commentId: number; postId: number }>,
        ) => {
          const { commentId, postId } = action.payload;
          const post = state.feeds.find((feed) => feed.id === postId);
          if (!post) return;

          const removeComment = (comments: Comment[]): Comment[] =>
            comments
              .filter((comment) => comment.id !== commentId)
              .map((comment) =>
                comment.childComments
                  ? {
                      ...comment,
                      childComments: removeComment(comment.childComments),
                    }
                  : comment,
              );

          post.comments = removeComment(post.comments);
        },
      )
      .addCase(toggleFollow.fulfilled, (state, action) => {
        const feed = state.feeds.find((item) => item.user.id === action.payload.followedId);

        if (!feed) return 

        feed.isfollowing = action.payload.removed
      })

    // .addCase(
    //   deleteCommentAsync.fulfilled,
    //   (state, action: PayloadAction<{ commentId: number; postId: number, parentId : number }>) => {
    //     const { commentId, postId, parentId } = action.payload;
    //     const post = state.feeds.find((feed) => feed.id === postId);
    //     if (!post) return;

    // const addNestedComment = (comments: Comment[]): Comment[] => {
    //   const parentComment = post.comments.find((item) => item.id === parentId)
    //   ?.map((comment) =>
    //       comment.childComments
    //         ? {
    //             ...comment,
    //             childComments: removeComment(comment.childComments),
    //           }
    //         : comment,
    //     )
    // }

    //   // },
    // )
  },
});

export default feedSlice.reducer;
