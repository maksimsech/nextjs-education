import type {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
} from 'next'
import { useRouter } from 'next/router'

import { CommentsSection } from ':components/comments/comments-section'
import { PageTitle } from ':components/common'
import { EventItem } from ':components/events/event-item'
import {
    createCommentFrom,
    createEventFrom,
} from '@your-spot/core/creators'
import {
    getEventByIdAsync,
    getFeaturedEventsAsync,
} from '@your-spot/core/data'
import {
    Comment,
    Event,
} from '@your-spot/database'


interface EventPageProps {
    event: Event,
    comments: Comment[]
}

export default function EventPage({
    event: prismaEvent,
    comments: prismaComments,
}: EventPageProps) {
    const router = useRouter()

    const event = createEventFrom(prismaEvent)
    const comments = prismaComments.map(createCommentFrom)
    const title = `${event.title} event`

    return (
        <>
            <PageTitle title={title} />
            <EventItem event={event} />
            <CommentsSection
                event={event}
                onCommentsUpdated={() => router.replace(router.asPath)}
                comments={comments}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps<EventPageProps> = async (context: GetStaticPropsContext) => {
    const eventId = context.params!.eventId as string
    console.log(`called for ${eventId}`)

    let event: Event & { comments: Comment[] } | null = null
    try {
        event = await getEventByIdAsync(eventId)
    }
    catch {
        event = null
    }

    return {
        props: {
            event: event!,
            comments: event?.comments || [],
        },
        notFound: !event,
        revalidate: 5,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const events = await getFeaturedEventsAsync()
    const eventPaths = events.map(e => ({
        params: {
            eventId: e.id,
        },
    }))

    return {
        paths: eventPaths,
        fallback: 'blocking',
    }
}
