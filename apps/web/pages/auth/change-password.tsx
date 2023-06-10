import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'

import { getServerSideSession } from ':auth/helpers'
import { ChangePassword } from ':components/auth/change-password'


export default function ChangePasswordPage() {
    return (
        <ChangePassword />
    )
}

// TODO: To common logic (I have helpers haha)
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
    const session = await getServerSideSession(context.req, context.res)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}
