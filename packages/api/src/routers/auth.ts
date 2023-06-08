import { TRPCError } from '@trpc/server'
import * as yup from 'yup'

import {
    createUser,
    findUserByEmail,
    hashPassword,
} from '@your-spot/core'

import {
    router,
    publicProcedure,
} from '../trpc'


export const authRouter = router({
    signUp: publicProcedure
        .input(yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        }))
        .mutation(async ({ input }) => {
            const existingUser = await findUserByEmail(input.email)
            if (existingUser) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                })
            }

            const passwordHash = await hashPassword(input.password)

            await createUser({
                email: input.email,
                password: passwordHash,
            })
        }),
})
