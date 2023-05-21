import { client } from '@your-spot/database'


export const getFeaturedEventsAsync = () => client.event.findMany({
    where: {
        isFeatured: true,
    },
})

export const getEventsAsync = () => client.event.findMany()

export const getEventByIdAsync = (id: string) => client.event.findUnique({
    where: {
        id,
    },
    include: {
        comments: true,
    },
})

type EventFilter = {
    year: number,
    month: number
}

export const getEventsFilteredByDate = ({ year, month }: EventFilter) => client.event.aggregateRaw({
    pipeline: [
        {
            $project: {
                doc: '$$ROOT',
                year: { $year: 'date' },
                month: { $month: 'date' },
            },
        },
        { $match : { 'month' : month, 'year': year } },
    ],
})
