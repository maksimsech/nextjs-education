import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '@back/trpc'

export default createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
})
