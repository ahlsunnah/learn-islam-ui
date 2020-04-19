require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.NODE_ENV)

const { API, API_SECRET } = process.env
if (!API) {
  throw new Error('We need an API environment variable !')
}
if (!API_SECRET) {
  throw new Error('We need an API_SECRET environment variable !')
}
module.exports = {
  siteMetadata: {
    title: 'Madrassah Minhaj',
    siteUrl: `https://m-minhaj.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `generated/graphqlTypes.ts`,
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: 'T',
          // immutableTypes: true,
          typesPrefix: 'T',
        },
      },
    },
    'gatsby-plugin-theme-ui',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'api',
        fieldName: 'api',
        url: API,
        headers: {
          'x-hasura-admin-secret': API_SECRET,
        },
      },
    },

    'gatsby-plugin-typescript',
    // 'gatsby-plugin-webpack-bundle-analyzer',
    // 'gatsby-plugin-accessibilityjs',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // color: `tomato`,
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://m-minhaj.com`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: { includePaths: ['node_modules'] },
    },
    // 'gatsby-plugin-postcss',

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo-square-1500.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://madrassaminhaj.us18.list-manage.com/subscribe/post?u=fc7a9d01c616717321a2bfce5&amp;id=02f1f3a51a',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Madrassa Minhaj',
        short_name: 'Madrassa Minhaj',
        start_url: '/',
        background_color: '#6496f6',
        theme_color: '#000696',
        display: 'minimal-ui',
        icon: 'src/images/logo-square-1500.png',
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
        integrity: 'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
        crossorigin: 'anonymous',
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-zeit-now`,
  ],
}
