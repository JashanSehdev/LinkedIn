
export type chatRoom = {
    roomId : number,
    user : chatUser,
    created_at : string,
    updated_at : number
}

export type message = {
    id : number
    chat_id : number,
    sender_id : number,
    text : string,
    created_at : string,
    updated_at : string
}

type chatUser = {
    id : number,
    username : string
}