import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { PageTitle } from ':components/common'
import { LayoutContainer } from ':components/layout/layout-container'

import { trpc } from '../trpc'

import '../styles/globals.scss'


function App({
    Component,
    pageProps: { session, ...restPageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <LayoutContainer>
                <PageTitle />
                <Component {...restPageProps} />
            </LayoutContainer>
        </SessionProvider>
    )
}

export default trpc.withTRPC(App)
