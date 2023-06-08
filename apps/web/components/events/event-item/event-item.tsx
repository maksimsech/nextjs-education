import Image from 'next/image'
import Link from 'next/link'

import { Event } from '@your-spot/contracts'
import { LinkButton } from '@your-spot/ui'

import './event-item.scss'


interface EventItemProps {
    event: Event
    showGoTo?: boolean
}

export function EventItem({ event, showGoTo = false }: EventItemProps) {
    const date = event.date.toDateString()
    const address = event.location.replace(', ', '\n')
    const link = `/events/${event.id}`

    return (
        <div>
            <Image
                src={`/${event.image}`}
                alt={event.title}
                width={200}
                height={200}
            />
            <div>
                <div>
                    <span>{event.title}</span>
                </div>
                <div>
                    <address>{address}</address>
                </div>
                <div>
                    <time>{date}</time>
                </div>
                {showGoTo && (
                    <div>
                        <LinkButton href={link} component={Link}>
                            Go to event
                        </LinkButton>
                    </div>
                )}
            </div>
        </div>
    )
}
