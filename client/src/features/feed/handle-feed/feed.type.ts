

export type Like = {
    id :number
    userId : number,
    postId : number,
    isDeleted : boolean
    
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