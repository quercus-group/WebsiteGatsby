require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Quercus Group | Sustainability, Collaboration & Innovation",
    description: "We help businesses, government and civic society to collaborate. Quercus Group is an international consulting company for sustainability in Copenhagen, Nairobi and Singapore.",
    defaultAuthor: "Quercus Group",
    siteUrl: `https://quercus-group.com`,
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
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true, 
        addUncaughtPages: true,
        exclude: [
          `/404`,
          `/404.html`,
        ]
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
    // {
    //   resolve: `@raae/gatsby-plugin-fathom`,
    //   options: {
    //     site: "OAHGTWLB",
    //   },
    // },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com"],
        web: [{
            name: "Lato",
            file: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap",
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Lato:400,700,900']
    //     }
    //   }
    // },
    // 'gatsby-plugin-preload-fonts',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quercus Group | Sustainability, Collaboration & Innovation`,
        short_name: `Quercus Group`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#2C2D48`,
        display: `standalone`,
        icon: 'src/images/QuercusGroupIcon-color.svg',
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://quercus-group.com`,
      },
    },
  ],
};
