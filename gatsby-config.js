require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  
  siteMetadata: {
    title: "Quercus Group | Sustainability, Collaboration & Innovation",
    description: "We help businesses, government and civic society to collaborate. Quercus Group is an international consulting company for sustainability in Copenhagen, Nairobi and Singapore.",
    author: "Quercus Group",
    siteUrl: "https://quercus-group.com/",
    // image: '/BognaAnnaPortfolio.jpg',
    themeColor: "#2C2D48"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    }
    // "gatsby-plugin-preload-fonts",
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `lato\:400,700,900`,
    //     ],
    //     display: 'swap'
    //   }
    // },
  ],
};
