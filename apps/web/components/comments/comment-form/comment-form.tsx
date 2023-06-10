import { FormEvent } from 'react'

import SuperJSON from 'superjson'

import {
    Comment,
    Event,
} from '@your-spot/contracts'
import {
    Button,
    TextField,
    useInputState,
} from '@your-spot/ui'
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
    const [author, setAuthor, setAuthorValue] = useInputState('')
    const [text, setText, setTextValue] = useInputState('')

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

        setAuthorValue('')
        setTextValue('')

        onCommentAdded()
    }

    return (
        <form
            className='comment-form'
            onSubmit={handleFormSubmit}
        >
            <TextField
                value={author}
                onChange={setAuthor}
                label='Author'
            />
            <TextField
                value={text}
                onChange={setText}
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
