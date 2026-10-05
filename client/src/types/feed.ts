

export type Post = {
  id : number,
  content: string,
  media ?: null | string,
  likeCount : LikeCount,
  user : User,
  shared: number,
  hashTags: string[]
  comments: Comment[],
  isfollowing: boolean,
  isConnected : boolean,
  userLike : Like | null,
    isRepost: boolean;
  repostOfId: number | null;
  repostOf: RepostOf | null;

}

type RepostOf = {
  id: number;
  content: string | null;
  media: string | null;
  shared: number;
  hashtags: string[];
  parentId: number | null;
  isRepost: boolean;
  repostOfId: number | null;

  user: {
    id: number;
    username: string;
  };
};

type LikeCount  = {
  1 : number
  2 : number
  3 : number
  4 : number
  5 : number
  6 : number
}
export type  User = {
  id : number,
  username : string,
  email: string
  followerCount: number,
  followingCount : number,
  connections : number
}



export type Comment = {
  id : number,
  text: string,
  parentId : number | null,
  userId : number,
  postId : number,
}

export type Like =  {
  id : number,
  userId : number,
  postId : number,
  type: number
}

