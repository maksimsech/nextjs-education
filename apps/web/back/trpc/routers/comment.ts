import yup from 'yup'

import { addComment as createComment } from '@back/data/comments-repository'

import {
    router,
    publicProcedure,
} from '../trpc'


export const commentRouter = router({
    create: publicProcedure
        .input(yup.object({
            text: yup.string().required(),
            eventId: yup.string().required(),
            author: yup.string().required(),
        }))
        .mutation(async ({ input }) => {
            const comment = await createComment(input)

            return comment // createCommentFrom(comment)
        }),
})
