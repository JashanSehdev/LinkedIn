import { type LucideProps } from 'lucide-react';
import { Camera } from 'lucide-react';
import { Heart, Lightbulb, PartyPopper, ThumbsUp, Laugh, HelpingHand } from "lucide-react";



// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   profileImage: string;
//   headline: string;
//   location?: string;
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
  user : User,
  shared: number,
  hashTags: string[]
  comments: Comment[]
}

export type  User = {
  username : string,
  email: string
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
  postId : number,
  type: number
}

