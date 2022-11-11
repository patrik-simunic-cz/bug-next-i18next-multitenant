
const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n, // disabling the Next.js i18n feature works... (this is not dependent from next-i18next at all)
    reactStrictMode: true,
    swcMinify: true,
}
