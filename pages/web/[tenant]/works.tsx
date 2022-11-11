
import { GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export interface WorksPageQuery extends ParsedUrlQuery {}
export interface WorksPageProps {
    tenant: string
}

export default ({ tenant }: WorksPageProps) => {
    const { t } = useTranslation()

    return (
        <div>
            {t('greeting', { tenant })}
            <br/>
            This page works!!!!! :)
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<WorksPageQuery> = async({}) => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<WorksPageProps, WorksPageQuery> = async({ params, locale }) => {
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
