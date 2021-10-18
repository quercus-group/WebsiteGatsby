require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  
  siteMetadata: {
    title: "Quercus Group | Sustainability, Collaboration & Innovation",
    description: "We help businesses, government and civic society to collaborate. Quercus Group is an international consulting company for sustainability in Copenhagen, Nairobi and Singapore.",
    defaultAuthor: "Quercus Group",
    siteUrl: "https://quercus-group.com/",
    image: '/metaImage-quercusGrop-main.jpg',
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
    { resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images`,
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:400,700,900']
        }
      }
    },
    'gatsby-plugin-preload-fonts'
  ],
};
