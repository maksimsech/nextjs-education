import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { Comment, Event } from '@prisma/client'

import { getEventByIdAsync, getFeaturedEventsAsync } from '@back/data/events-repository'
import { createCommentFrom, createEventFrom } from '@models/factories'
import { EventItem } from '@components/events/event-item'
import { PageTitle } from '@components/common'
import { CommentsSection } from '@components/comments/comments-section'


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
            comments: event!.comments,
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
