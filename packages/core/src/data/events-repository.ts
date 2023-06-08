import { client } from '@your-spot/database'


export const getFeaturedEventsAsync = () => client.event.findMany({
    where: {
        isFeatured: true,
    },
})

export function getEventsAsync() {
    return client.event.findMany()
}

export function getEventByIdAsync(id: string) {
    return client.event.findUnique({
        where: {
            id,
        },
        include: {
            comments: true,
        },
    })
}

type EventFilter = {
    year: number,
    month: number
}

export function getEventsFilteredByDate({year,month}: EventFilter) {
    return client.event.aggregateRaw({
        pipeline: [
            {
                $project: {
                    doc: '$$ROOT',
                    year: {$year: 'date'},
                    month: {$month: 'date'},
                },
            },
            {$match: {'month': month,'year': year}},
        ],
    })
}
