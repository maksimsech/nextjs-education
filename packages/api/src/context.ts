import { CreateNextContextOptions } from '@trpc/server/adapters/next'

import {
    getServerSession,
    options,
} from '@your-spot/auth'


// TODO: It is unreal to do smth from this... Libraries really rely on next deps.
// It is fine. But I don't really like it.
export async function createContext({ req, res }: CreateNextContextOptions) {
    const session = await getServerSession(req, res, options)

    return {
        session,
    }
}
