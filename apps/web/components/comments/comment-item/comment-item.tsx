import { Divider } from '@mui/material'
import classNames from 'classnames'

import { Comment } from '@your-spot/contracts'

import './comment-item.scss'


interface CommentItemProps {
    className?: string
    comment: Comment
}

export function CommentItem({
    className,
    comment,
}: CommentItemProps) {
    return (
        <div className={classNames('comment-item', className)}>
            <span>{comment.text}</span>
            <span>{comment.author}</span>
            <Divider light />
        </div>
    )
}
