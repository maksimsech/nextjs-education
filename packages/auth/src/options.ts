import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import {
    findUserByEmail,
    hashPassword,
} from '@your-spot/core'


export const options = {
    session: {
        strategy: 'jwt',
    },
    providers: [Credentials({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'string' },
            password: { label: 'Password', type: 'string' },
        },
        async authorize(credentials) {
            if (!credentials) {
                throw new Error('No credentials')
            }

            const user = await findUserByEmail(credentials.email)
            if (!user) {
                throw new Error('Verify email')
            }

            const password = await hashPassword(credentials.password)

            if (user.password !== password) {
                throw new Error('No user found')
            }

            return {
                id: user.id,
                email: user.email,
            }
        },
    })],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.sub = user.id
                token.name = user.name
            }

            return token
        },
    },
} as NextAuthOptions
