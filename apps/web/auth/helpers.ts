import type { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'

import { options } from '@your-spot/auth'


export function getServerSideSession(
    req: GetServerSidePropsContext['req'],
    res: GetServerSidePropsContext['res'],
) {
    return getServerSession(req, res, options)
}
