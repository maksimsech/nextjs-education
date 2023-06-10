import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'
import { type Session } from 'next-auth'

import { getServerSideSession } from './helpers'


// TODO: Fix types
export async function withSession<T = any>(
    context: GetServerSidePropsContext,
    result: GetServerSidePropsResult<T>): Promise<GetServerSidePropsResult<T & {
    session?: Session | null
}>> {
    if (!('props' in result)) {
        // @ts-ignore
        result.props = {}
    }
    // @ts-ignore
    const props: T & { session: Session | null } = result.props instanceof Promise ? await result.props : result.props
    const session = await getServerSideSession(context.req, context.res)
    props.session = session

    return result as unknown as Promise<GetServerSidePropsResult<T & { session: Session | null }>>
}
