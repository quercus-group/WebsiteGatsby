module.exports = {
  siteMetadata: {
    title: "QuercusGroupWebsite",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "RA6ossg_o3e9wdVX6Zl1SR4A3NWXX8WzfECHm-Ao8ow",
        spaceId: "3uljl8cvry5j",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
