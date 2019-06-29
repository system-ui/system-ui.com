module.exports = {
  __experimentalThemes: [
    // move this
    'gatsby-theme-ui',
  ],
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [
          '.mdx', '.md',
        ]
      }
    },
  ],
}
