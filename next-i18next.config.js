module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      locales: ['en', 'nl', 'de', 'fr', 'es'],
      defaultLocale: 'en',
    },
  };