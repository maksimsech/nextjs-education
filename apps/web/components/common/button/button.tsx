import { PropsWithChildren } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import './button.scss'


interface ButtonProps extends PropsWithChildren {
    className?: string
    link: string
}

export function Button({
    className,
    link,
    children,
}: ButtonProps) {
    return (
        <Link
            href={link}
            className={classNames('button', className)}
            passHref
        >
            {children}
        </Link>
    )
}
