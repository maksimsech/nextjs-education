import { Event } from '@models'

import { EventItem } from '../event-item'

import './event-list.scss'


interface EventListProps {
    events: Event[]
}

export function EventList({ events }: EventListProps) {
    return (
        <ul className='container'>
            {events.map(e => (
                <li
                    key={e.id}
                    className='container-item'
                >
                    <EventItem
                        event={e}
                        showGoTo // change to component as prop with link 
                    />
                </li>
            ))}
        </ul>
    )
}
