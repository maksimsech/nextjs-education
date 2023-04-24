import { Comment, Event } from '@models'

import { CommentForm } from '../comment-form'
import { CommentItem } from '../comment-item'


interface CommentsSectionProps {
    event: Event
    comments: Comment[]
    onCommentsUpdated: () => void
}

export function CommentsSection({
    event,
    comments,
    onCommentsUpdated,
}: CommentsSectionProps) {
    return (
        <div>
            <CommentForm
                event={event}
                onCommentAdded={onCommentsUpdated}
            />
            <div>
                {comments.map(c => (
                    <CommentItem
                        key={c.id}
                        comment={c}
                    />
                ))}
            </div>
        </div>
    )
}
