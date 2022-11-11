
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '../styles/globals.css'

// export default appWithTranslation(({ Component, pageProps }: AppProps) => {
//     return (
//         <Component
//             {...pageProps}
//         />
//     )
// })


export default ({ Component, pageProps }: AppProps) => {
    return (
        <Component
            {...pageProps}
        />
    )
}
