import Link from 'next/link'
import { useSession } from 'next-auth/react'

import './header.scss'


export function Header() {
    const { status } = useSession()

    const isAuthenticated = status === 'authenticated'
    const isUnauthenticated = status === 'unauthenticated'

    return (
        <header className='header'>
            <Link
                href='/'
            >
                My cool project
            </Link>
            <nav className='header__links'>
                {isUnauthenticated && (
                    <>
                        <Link href='/auth/sign-in'>
                            Sign in
                        </Link>
                        <Link href='/auth/sign-up'>
                            Sign up
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <Link href='/auth/change-password'>
                            Change password
                        </Link>
                    </>
                )}
                <Link href='/events'>
                    All events
                </Link>
            </nav>
        </header>
    )
}
