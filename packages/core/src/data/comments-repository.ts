import { client } from '@your-spot/database'


interface CommentCreate {
    text: string
    author: string
    eventId: string
}

export function addComment(comment: CommentCreate) {
    return client.comment.create({ data: comment })
}

export function getCommentsByEventId(eventId: string) {
    return client.comment.findMany({
        where: {
            eventId,
        },
    })
}
