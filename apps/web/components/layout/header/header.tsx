import Link from 'next/link'

import './header.scss'


export function Header() {
    return (
        <header className='header'>
            <Link
                href='/'
            >
                My cool project
            </Link>
            <nav className='header__links'>
                <Link href='/auth/sign-in'>
                    Sign in
                </Link>
                <Link href='/auth/sign-up'>
                    Sign up
                </Link>
                <Link href='/events'>
                    All events
                </Link>
            </nav>
        </header>
    )
}
