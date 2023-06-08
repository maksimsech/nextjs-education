import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'
import {
    type Session,
    getServerSession,
} from 'next-auth'

import { options } from './options'


// TODO: Fix types
export async function withSession<T = any>(
    context: GetServerSidePropsContext,
    result: GetServerSidePropsResult<T>): Promise<GetServerSidePropsResult<T & {
    session?: Session | null
}>>
{
    // @ts-ignore
    if (!(result in props)) {
        // @ts-ignore
        result.props = {}
    }
    // @ts-ignore
    const props: T & { session: Session | null } = result.props instanceof Promise ? await result.props : result.props
    const session = await getServerSession(context.req, context.res, options)
    props.session = session

    return result as unknown as Promise<GetServerSidePropsResult<T & { session: Session | null }>>
}
