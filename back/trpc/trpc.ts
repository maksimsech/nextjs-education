import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'

import 'superjson-config'


const t = initTRPC.create({
    transformer: SuperJSON,
})

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
