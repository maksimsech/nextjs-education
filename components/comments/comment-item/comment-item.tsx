import classNames from 'classnames'
import { Divider } from '@mui/material'

import { Comment } from '@models'

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
