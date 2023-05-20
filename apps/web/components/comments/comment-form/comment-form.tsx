import {
    FormEvent,
    useState,
} from 'react'

import {
    Button,
    TextField,
} from '@mui/material'
import SuperJSON from 'superjson'

import {
    Comment,
    Event,
} from '@your-spot/contracts'
import { trpc } from 'trpc'

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
    // eslint-disable-next-line no-unused-vars
    async function updateViaFetch() {
        const response = await fetch(`/api/events/${event.id}/comments`,{
            method: 'POST',
            body: JSON.stringify({
                text,
                author,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const textResponse = await response.text()

        // eslint-disable-next-line no-unused-vars
        const comment = SuperJSON.parse<{ comment: Comment}>(textResponse)
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // eslint-disable-next-line no-unused-vars
        const result = await context.client.comment.create.mutate({
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
            onSubmit={handleFormSubmit}
        >
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
