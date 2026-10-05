
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

export type Message = {
    id : number,
    chatId : number,
    text: string,
    sender_id : number,
    created_at : string,
    update_at : string,
    files ?: File[]
}
export type File = {
    file_name : string,
    file_size : number,
    file_type : string,
    file_url : string
}