import { Comment } from '@your-spot/contracts'
import { Comment as DbComment } from '@your-spot/database'


export function createCommentFrom(comment: DbComment) {
    return new Comment({ ...comment })
}
