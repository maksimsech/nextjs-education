import SuperJSON from 'superjson'

import { Comment, Event } from '@your-spot/contracts'


SuperJSON.registerCustom<Event, string>(
    {
        isApplicable: (e): e is Event => e instanceof Event,
        serialize: e => JSON.stringify(e),
        deserialize: e => new Event(JSON.parse(e)),
    },
    'domain-event',
)

SuperJSON.registerCustom<Comment, string>(
    {
        isApplicable: (c): c is Comment => c instanceof Comment,
        serialize: c => JSON.stringify(c),
        deserialize: s => new Comment(JSON.parse(s)),
    },
    'domain-comment',
)
