import { client } from '@your-spot/database'


interface CommentCreateRequest {
    text: string
    author: string
    eventId: string
}

export const addComment = async (comment: CommentCreateRequest) => {
    const createdComment = await client.comment.create({ data: comment })
    return createdComment
}

export const getCommentsByEventId = (eventId: string) => client.comment.findMany({
    where: {
        eventId,
    }
})
