import prisma from '../prisma/client'


export const getFeaturedEventsAsync = () => prisma.event.findMany({
    where: {
        isFeatured: true
    },
})

export const getEventsAsync = () => prisma.event.findMany()

export const getEventByIdAsync = (id: string) => prisma.event.findUnique({
    where: {
        id
    },
    include: {
        comments: true,
    }
})

type EventFilter = {
    year: number,
    month: number
}

export const getEventsFilteredByDate = ({ year, month }: EventFilter) => prisma.event.aggregateRaw({
    pipeline: [
        {
            $project: {
                doc: '$$ROOT',
                year: { $year: 'date' },
                month: { $month: 'date' },
            },
        },
        { $match : { 'month' : month, 'year': year } }
    ],
})
