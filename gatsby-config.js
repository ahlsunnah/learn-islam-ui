module.exports = {
  siteMetadata: {
    title: 'Learn Islam',
  },
  plugins: [
    // 'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-preact',
    // `gatsby-source-feathers`,
    {
      resolve: `gatsby-source-rest`,
      options: {
        type: 'Feathers',
        api: `http://localhost:3030/`,
        name: 'learn-islam',
        path: 'data',
        params: '?$populate=true',
        services: ['topics', 'tracks', 'courses', 'chapters', 'translations'],
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vt5to60w8qkv`,
        accessToken: `400d21c5280aadfd68d5ae6334d01434448a1f313683155bf3155774ef2e534f`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
          'gatsby-remark-youtube',
        ],
      },
    },
    'gatsby-plugin-netlify',
  ],
}
