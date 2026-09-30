// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   profileImage: string;
//   headline: string;
//   location?: string;
// }

// export interface Comment {
//   id: number;
//   author: User;
//   text: string;
//   createdAt: string;
//   likes: number;
//   isLiked: boolean;
//   replies: Comment[];
// }

// export interface Reactions {
//   likes: number;
//   celebrate: number;
//   support: number;
//   love: number;
// }

// export interface PostMedia {
//   type: "image" | "video";
//   url: string;
// }

// export interface FeedPost {
//   id: number;
//   author: User;
//   content: string;
//   media: PostMedia | null;
//   hashtags: string[];
//   createdAt: string;
//   reactions: Reactions;
//   shares: number;
//   isLiked: boolean;
//   comments: Comment[];
//   likes : Like
// }

// type Like = {
//   id : number,
//   userId : number,
//   postId : number,
// }

// export type FeedData = FeedPost[];

// export type Feed = {
//   content : string,
//   image ?: string
// }

export type Post = {
  id : number,
  content: string,
  media ?: null | string,
  likes : Like[],
  author : string,
  shared: number,
  hashTags: string[]
  comments: Comment[]
}


export type Comment = {
  id : number,
  text: string,
  parentId : number | null,
  userId : number,
  postId : number,
  childComments?: Comment[]
}

export type Like =  {
  id : number,
  userId : number,
  postId : number
}