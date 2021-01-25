module.exports = {
  siteMetadata: {
    title: `Gatsby Inicial Padrão`,
    description: `Comece seu próximo grande projeto Gatsby com este iniciador padrão. Este iniciador barebones vem com os principais arquivos de configuração do Gatsby de que você pode precisar.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Este caminho é relativo à raiz do site.
      },
    },
     // este plugin (opcional) ativa a funcionalidade Progressive Web App + Offline
     // Para saber mais, visite: https://gatsby.dev/offline
     // `gatsby-plugin-offline`,
  ],
}
