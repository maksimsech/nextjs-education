import {
    PropsWithChildren,
    ElementType,
} from 'react'

import classNames from 'classnames'

import './link-button.scss'


interface ButtonProps extends PropsWithChildren {
    className?: string
    href: string,
    component?: ElementType<{ href: string, className: string } & any>
}

export function LinkButton({
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
            className={classNames('ys-button', className)}
            {...restProps}
        >
            {children}
        </Link>
    )
}
