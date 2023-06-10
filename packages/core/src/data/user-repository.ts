import { client } from '@your-spot/database'

type UserCreate = {
    email: string,
    password: string,
}

type UpdateUserPassword = {
    id: string,
    password: string,
}

export function createUser(user: UserCreate) {
    return client.user.create({ data: user })
}

export function updateUserPassword(user: UpdateUserPassword) {
    return client.user.update({
        where: {
            id: user.id,
        },
        data: {
            password: user.password,
        },
    })
}

export function findUserByEmail(email: string) {
    return client.user.findFirst({
        where: {
            email,
        },
    })
}
