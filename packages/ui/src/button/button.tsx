import {
    PropsWithChildren,
    ElementType,
} from 'react'

import classNames from 'classnames'

import './button.scss'


interface ButtonProps extends PropsWithChildren {
    className?: string
    href: string,
    component?: ElementType<{ href: string, className: string } & any>
}

export function Button({
    className,
    href,
    component,
    children,
    ...restProps
}: ButtonProps) {
    const Link = component || 'a'

    return (
        <Link
            href={href}
            className={classNames('button', className)}
            {...restProps}
        >
            {children}
        </Link>
    )
}
