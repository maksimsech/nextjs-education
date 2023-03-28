import Image from 'next/image'

import { Event, } from '@models'
import { Button } from '@components/common'

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
                        <Button link={link}>
                            Go to event
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
