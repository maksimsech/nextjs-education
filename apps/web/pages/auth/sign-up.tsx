import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'

import { getServerSideSession } from ':auth/helpers'
import { SignUp } from ':components/auth/sign-up'


export default function SignUpPage() {
    return (
        <SignUp />
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
    const session = await getServerSideSession(context.req, context.res)
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}
