const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'es'],
  },
  localePath: path.resolve('./src/assets/i18n/locales'),
}