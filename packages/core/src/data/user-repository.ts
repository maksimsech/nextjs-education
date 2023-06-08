import { client } from '@your-spot/database'

type UserCreate = {
    email: string,
    password: string,
}

export function createUser(user: UserCreate) {
    return client.user.create({ data: user })
}

export function findUserByEmail(email: string) {
    return client.user.findFirst({
        where: {
            email,
        },
    })
}
