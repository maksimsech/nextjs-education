import SuperJSON from 'superjson'
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
            transformer: SuperJSON,
            links: [
                loggerLink({
                    enabled: () => process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }
    },
    ssr: false,
})
