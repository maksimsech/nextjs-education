import { FormEvent } from 'react'

import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'


import {
    Button,
    TextField,
    useInputState,
} from '@your-spot/ui'

import './sign-in.scss'


export function SignIn() {
    const router = useRouter()

    const [email, setEmail] = useInputState('')
    const [password, setPassword] = useInputState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        signIn('credentials', {
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
                Sign in
            </Button>
        </form>
    )
}
