
import { GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export interface IndexPageQuery extends ParsedUrlQuery {}
export interface IndexPageProps {
    tenant: string
}

export default ({ tenant }: IndexPageProps) => {
    const { t } = useTranslation()

    return (
        <div>
            {t('greeting', { tenant })}
            <br/>
            This page gets 404 :((((
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<IndexPageQuery> = async({}) => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<IndexPageProps, IndexPageQuery> = async({ params, locale }) => {
    if (!params?.tenant) {
        throw new Error('Missing tenant')
    }

    return {
        revalidate: 3600,
        props: {
            ...(await serverSideTranslations(locale, [ 'common' ])),
            tenant: String(params.tenant),
        },
    }
}
