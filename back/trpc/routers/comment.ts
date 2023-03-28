import { z } from 'zod'

import { addComment as createComment } from '@back/data/comments-repository'
import { createCommentFrom } from '@models/factories'

import { router, publicProcedure } from '../trpc'


export const commentRouter = router({
    create: publicProcedure
        .input(z.object({
            text: z.string(),
            eventId: z.string(),
            author: z.string(),
        }))
        .mutation(async ({ input }) => {
            const comment = await createComment(input)

            return createCommentFrom(comment)
        })
})
