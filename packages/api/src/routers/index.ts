import { router } from '../trpc'

import { authRouter } from './auth'
import { commentRouter } from './comment'


export const appRouter = router({
    auth: authRouter,
    comment: commentRouter,
})

export type AppRouter = typeof appRouter
