
const path = require('path')

module.exports = {
    localePath: path.resolve('./public/locales'),
    i18n: {
        locales: [ 'en', 'cs' ],
        defaultLocale: 'cs',
        localeDetection: false,
    },
}
