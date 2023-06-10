import {
    TRPCError,
    initTRPC,
} from '@trpc/server'
import SuperJSON from 'superjson'

import './superjson-config'
import { createContext } from './context'


const t = initTRPC.context<typeof createContext>().create({
    transformer: SuperJSON,
})

export const { router } = t
export const { middleware } = t
export const publicProcedure = t.procedure

const requireSessionMiddleware = middleware(({ ctx, next }) => {
    if (!ctx.session?.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
        ctx: {
            session: {
                ...ctx.session,
                user: ctx.session.user,
            },
        },
    })
})
export const authorizedProcedure = t.procedure.use(requireSessionMiddleware)
