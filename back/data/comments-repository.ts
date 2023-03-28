import prisma from '../prisma/client'


interface CommentCreateRequest {
    text: string
    author: string
    eventId: string
}

export const addComment = async (comment: CommentCreateRequest) => {
    const createdComment = await prisma.comment.create({ data: comment })
    return createdComment
}

export const getCommentsByEventId = (eventId: string) => prisma.comment.findMany({
    where: {
        eventId,
    }
})
