export interface Post {
    id: number,
    content: string,
    parent_id: number,
    tripcode?: string,
    attachment?: string
}

export interface Thread {
    id: number
}