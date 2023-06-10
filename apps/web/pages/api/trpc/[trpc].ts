import { createNextApiHandler } from '@trpc/server/adapters/next'

import {
    appRouter,
    createContext,
} from '@your-spot/api'


export default createNextApiHandler({
    router: appRouter,
    createContext: createContext,
})
