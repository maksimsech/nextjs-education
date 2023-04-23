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
                <Link href='events'>
                    All events
                </Link>
            </nav>
        </header>
    )
}
