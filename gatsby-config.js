/* eslint no-console: 0 */
const path = require(`path`)
const {API, USER, PASSWORD} = process.env
if (!API || !USER || !PASSWORD) {
  console.error('We need API USER AND PASSWORD env variables set', API, USER)
}
module.exports = {
  siteMetadata: {
    title: 'Madrassah Minhaj',
    siteUrl: `https://demo.m-minhaj.com`,
  },
  plugins: [
    'gatsby-plugin-flow',
    // 'gatsby-plugin-webpack-bundle-analyzer',
    // 'gatsby-plugin-accessibilityjs',
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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {includePaths: [path.resolve(__dirname, './node_modules')]},
    },
    'gatsby-plugin-postcss',
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
          'quizs',
          'quizs-strings',
          'translations',
        ],
      },
    },
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
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
