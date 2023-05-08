import type { PropsWithChildren } from 'react'

import { Header } from './header'


export function LayoutContainer({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
