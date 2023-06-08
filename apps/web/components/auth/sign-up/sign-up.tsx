import { FormEvent } from 'react'

import { useRouter } from 'next/router'

import {
    Button,
    TextField,
    useInputState,
} from '@your-spot/ui'
import { trpc } from 'trpc'



export function SignUp() {
    const { client } = trpc.useContext()
    const router = useRouter()

    const [email, setEmail] = useInputState('')
    const [password, setPassword] = useInputState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        await client.auth.signUp.mutate({
            email,
            password,
        })

        router.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={email}
                onChange={setEmail}
                label='Email'
            />
            <TextField
                value={password}
                onChange={setPassword}
                label='Password'
                type='password'
            />
            <Button type='submit'>
                Sign up
            </Button>
        </form>
    )
}
