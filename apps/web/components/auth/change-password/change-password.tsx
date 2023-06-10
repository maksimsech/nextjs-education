import { FormEvent } from 'react'

import { useRouter } from 'next/router'

import {
    Button,
    TextField,
    useInputState,
} from '@your-spot/ui'
import { trpc } from 'trpc'



export function ChangePassword() {
    const { client } = trpc.useContext()
    const router = useRouter()

    const [password, setPassword] = useInputState('')
    const [passwordConfirmation, setPasswordConfirmation] = useInputState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        await client.auth.changePassword.mutate({
            password,
        })

        router.push('/')
    }

    const passwordConfirmationError = password !== passwordConfirmation

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={password}
                onChange={setPassword}
                label='Password'
                type='password'
            />
            <TextField
                value={passwordConfirmation}
                onChange={setPasswordConfirmation}
                label='Confirm Password'
                type='password'
                error={passwordConfirmationError}
            />
            <Button type='submit'>
                Update
            </Button>
        </form>
    )
}
