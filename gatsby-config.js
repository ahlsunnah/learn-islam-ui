const path = require(`path`)
const {API, USER, PASSWORD} = process.env

module.exports = {
  siteMetadata: {
    title: 'Learn Islam',
  },
  plugins: [
    // 'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: 'pages',
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/`,
    //     name: `content`,
    //   },
    // },
    'gatsby-plugin-netlify',
  ],
}
