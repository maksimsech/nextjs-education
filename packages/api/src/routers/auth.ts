import { TRPCError } from '@trpc/server'
import * as yup from 'yup'

import {
    createUser,
    findUserByEmail,
    hashPassword,
    updateUserPassword,
} from '@your-spot/core'

import {
    router,
    publicProcedure,
    authorizedProcedure,
} from '../trpc'


const password = yup.string().required().min(8)

export const authRouter = router({
    signUp: publicProcedure
        .input(yup.object({
            email: yup.string().required().email(),
            password,
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
    changePassword: authorizedProcedure
        .input(yup.object({
            password,
        }))
        .mutation(async ({ input, ctx: { session: { user: sessionUser } } }) => {
            const newPasswordHash = await hashPassword(input.password)
            const user = await findUserByEmail(sessionUser.email) // TODO: Check how to update use model
            if (!user) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'User is not found',
                })
            }

            if (user.password === newPasswordHash) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'Use new password.',
                    cause: 'password',
                })
            }

            await updateUserPassword({
                id: user.id,
                password: newPasswordHash,
            })
        }),
})
