

export type Like = {
    id :number
    userId : number,
    postId : number,
    status : string,
    type :number
    
}


export type CommentInput = {
    postId :number,
    text : string
}

export type NestedCommentInput = {
    postId :number,
    text : string,
    parentId: number
}

export type createRepost ={
    postId :number,
    content ?: string
}