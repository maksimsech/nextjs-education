import { Comment as PrismaComment } from '@prisma/client'

import { Comment } from '../comment'


export function createCommentFrom(comment: PrismaComment) {
    return new Comment({ ...comment })
}
