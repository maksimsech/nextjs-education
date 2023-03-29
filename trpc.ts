import SuperJSON from 'superjson'
import { MutationCache, QueryCache } from '@tanstack/react-query'

import { httpBatchLink, loggerLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import type { AppRouter } from '@back/trpc'

import 'superjson-config'


function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`
    }

    if (process.env.RENDER_INTERNAL_HOSTNAME) {
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
    }

    return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        return {
            queryClientConfig: {
                queryCache: new QueryCache({
                    onError(error) {
                        // TODO: Notification might be added there
                        console.log('error', error)
                    },
                }),
                mutationCache: new MutationCache({
                    onError(error) {
                        // TODO: Notification might be added there
                        console.log('error', error)
                    }
                }),
            },
            transformer: SuperJSON,
            links: [
                loggerLink({
                    // TODO: Or there
                    enabled: () => process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }
    },
    ssr: false, // fully migrate to tRPC to use it (read docs)
})
