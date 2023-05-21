import { Event } from '@your-spot/contracts'
import { Event as DbEvent } from '@your-spot/database'


export function createEventFrom(event: DbEvent) {
    return new Event({ ...event })
}
