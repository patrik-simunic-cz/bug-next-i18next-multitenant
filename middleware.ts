
import { NextRequest, NextResponse } from 'next/server'

const rootHost = 'localhost:3000'

export const config = {
    matcher: [ '/((?!api|_next|locales|fonts|[\\w-]+\\.\\w+).*)' ],
}

export default (request: NextRequest) => {
    const url = request.nextUrl
    const hostname = request.headers.get('host') || rootHost

    url.pathname = `/web/${hostname}${url.pathname}`
    return NextResponse.rewrite(url)
}
