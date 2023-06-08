import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'

import { withSession } from ':auth/ssr-helpers'


export default function EventsPage() {
    return (
        <>
            Events!
        </>
    )
}

export function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
    return withSession(context, {})
}
