import type {
    NextApiRequest,
    NextApiResponse,
} from 'next'
import SuperJSON from 'superjson'
import { SuperJSONResult } from 'superjson/dist/types'

import { addComment } from '@back/data/comments-repository'
import { Comment } from '@your-spot/contracts'
import { createCommentFrom } from '@your-spot/contracts/factories'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SuperJSONResult>,
) {
    const comment = await addComment({
        ...req.body,
        eventId: req.query.eventId,
    })

    const c = createCommentFrom(comment)
    console.log(c instanceof Comment)

    res.status(200).json(SuperJSON.serialize(c))
}
