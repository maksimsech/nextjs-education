import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter } from '@your-spot/api'

export default createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
})
