import Head from 'next/head'

import { getPageTitle } from 'helpers/getPageTitle'


interface PageTitleProps {
    title?: string
}

export function PageTitle({ title: propsTitle }: PageTitleProps) {
    const title = getPageTitle(propsTitle)

    return (
        <Head>
            <title>
                {title}
            </title>
        </Head>
    )
}
