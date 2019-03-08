module.exports = {
  siteMetadata: {
    title: 'Plug Nation Festival',
    author: 'Tyler Krett',
    description: 'Plug Nation Festival Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Plug Nation Festival',
        short_name: 'Plug Nation',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/PLUGNATION_LOGO_wite.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
