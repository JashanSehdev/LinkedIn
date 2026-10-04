export type Connection = {
    connectionId : number,
    user: ConnectionUser
}

type ConnectionUser = {
    id : number,
    username : string
}