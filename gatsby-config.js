/* eslint no-console: 0 */
const path = require(`path`)
const {API, USER, PASSWORD} = process.env
if (!API || !USER || !PASSWORD) {
  console.error('We need API USER AND PASSWORD env variables set', API, USER)
}
module.exports = {
  siteMetadata: {
    title: 'Learn Islam',
    siteUrl: `https://madrassaminhaj.com`,
  },
  plugins: [
    'gatsby-plugin-webpack-bundle-analyzer',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-accessibilityjs',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://37ac93a8f3644b2fad4a3594da09c668@sentry.io/1205429',
        version: '3.25.1',
      },
    },
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
        siteUrl: `https://madrassaminhaj.com`,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {includePaths: [path.resolve(__dirname, './node_modules')]},
    },
    // {
    //   resolve: `gatsby-plugin-postcss-sass`,
    //   options: {
    //     includePaths: [path.resolve(__dirname, './node_modules')],
    //     // postCssPlugins: [somePostCssPlugin()],
    //     // precision: 5,
    //   },
    // },
    // 'gatsby-plugin-preact',
    // `gatsby-source-feathers`,
    {
      resolve: `gatsby-source-rest`,
      options: {
        type: 'Feathers',
        api: API,
        email: USER,
        password: PASSWORD,
        name: 'learn-islam',
        path: 'data',
        params: '?$populate=true',
        services: [
          'topics',
          'topics-strings',
          'tracks',
          'tracks-strings',
          'courses',
          'courses-strings',
          'chapters',
          'chapters-strings',
          'translations',
        ],
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Madrassa Minhaj',
        short_name: 'Madrassa Minhaj',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/logo-square-1500.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
