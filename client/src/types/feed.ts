

export type Post = {
  id : number,
  content: string,
  media ?: null | string,
  likes : Like[],
  user : User,
  shared: number,
  hashTags: string[]
  comments: Comment[],
  isfollowing: boolean,
  isconnected : boolean
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
  childComments?: Comment[]
}

export type Like =  {
  id : number,
  userId : number,
  postId : number,
  type: number
}

