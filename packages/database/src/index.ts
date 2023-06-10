import prisma from './client'


export { Prisma } from '@prisma/client'
export type {
    Event,
    Comment,
    User,
} from '@prisma/client'

export { prisma as client }
