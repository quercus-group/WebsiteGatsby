const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const projectPage = path.resolve('./src/templates/projectPage.js')
    const teamMember = path.resolve('./src/templates/teamMember.js')
    const response = await graphql(`
    query {allContentfulProject {
        edges {
          node {
            slug 
          }
        }
      }
      allContentfulTeamMember {
        edges {
          node {
            slug 
          }
        }
      }
      }
    `)
    response.data.allContentfulProject.edges.forEach((edge) =>{
        createPage({
            component: projectPage,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    response.data.allContentfulTeamMember.edges.forEach((edge) =>{
        createPage({
            component: teamMember,
            path: `/team/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

