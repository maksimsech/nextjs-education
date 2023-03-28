import { FormEvent, useState } from 'react'
import SuperJSON from 'superjson'
import { Button, TextField } from '@mui/material'

import { trpc } from 'trpc'
import { Comment, Event } from '@models'

import './comment-form.scss'


interface CommentFormProps {
    event: Event
    onCommentAdded: () => void
}

export function CommentForm({
    event,
    onCommentAdded,
}: CommentFormProps) {
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    const context = trpc.useContext()
    async function updateViaFetch() {
        const response = await fetch(`/api/events/${event.id}/comments`,{
            method: 'POST',
            body: JSON.stringify({
                text,
                author,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const textResponse = await response.text()

        const comment = SuperJSON.parse<{ comment: Comment}>(textResponse)
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await context.client.comment.create.mutate({
            text,
            author,
            eventId: event.id,
        })

        setAuthor('')
        setText('')

        onCommentAdded()
    }

    return (
        <form
            className='comment-form'
            onSubmit={handleFormSubmit}>
            <TextField
                value={author}
                onChange={e => setAuthor(e.target.value)}
                label='Author'
            />
            <TextField
                value={text}
                onChange={e => setText(e.target.value)}
                label='Text'
                multiline
                maxRows={4}
            />
            <Button type='submit'>
                Add
            </Button>
        </form>
    )
}
