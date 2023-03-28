import { Event as PrismaEvent } from '@prisma/client'

import { Event } from 'models/event'


export function createEventFrom(event: PrismaEvent) {
    return new Event({ ...event })
}
