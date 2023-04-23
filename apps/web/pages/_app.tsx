import type { AppProps } from 'next/app'

import { LayoutContainer } from 'components/layout/layout-container'
import { PageTitle } from 'components/common'

import { trpc } from 'trpc'

import '../styles/globals.scss'


function App({ Component, pageProps }: AppProps) {
    return (
        <LayoutContainer>
            <PageTitle />
            <Component {...pageProps} />
        </LayoutContainer>
    )
}

export default trpc.withTRPC(App)
