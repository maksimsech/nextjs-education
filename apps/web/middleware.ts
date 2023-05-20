import {
    NextResponse,
    type NextRequest,
} from 'next/server'

// TODO: Useless here. Can be removed.
// import 'superjson-config'


export function middleware(request: NextRequest) {
    console.log('before next', request)

    NextResponse.next()

    console.log('after next')
}

export const config = {
    matcher: '/api/:path*',
}

