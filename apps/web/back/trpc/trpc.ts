import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'

import 'superjson-config'


const t = initTRPC.create({
    transformer: SuperJSON,
})

export const { router } = t
export const { middleware } = t
export const publicProcedure = t.procedure
