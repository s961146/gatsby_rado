module.exports = {
  siteMetadata: {
    title: "Rado's Web Site",
    author: "Radoslav Danev",
    description: "Rado personal website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'radoslavdanev.com'
      },
  },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
