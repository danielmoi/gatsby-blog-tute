module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my blog',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      }
    }
  ]
}