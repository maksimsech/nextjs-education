import { Event } from '@prisma/client'
import { GetStaticProps } from 'next'

import { EventList } from '@components/events/event-list'
import { getFeaturedEventsAsync } from '@back/data/events-repository'
import { createEventFrom } from '@models/factories'


interface IndexPageProps {
    events: Event[]
}

export default function IndexPage({ events: prismaEvents }: IndexPageProps) {
    const events = prismaEvents.map(createEventFrom)

    return (
        <>
            <EventList events={events} />
        </>
    )
}


export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    const events = await getFeaturedEventsAsync()

    return {
        props: {
            events
        },
        revalidate: 15,
    }
}


// export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
//     const events = await getFeaturedEventsAsync()

//     return {
//         props: {
//             events
//         }
//     }
// }
