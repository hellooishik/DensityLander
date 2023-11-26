/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      // Query data from your Strapi CMS here if needed
      // This query fetches data you want to use on your pages
    }
  `);

  // Create Homepage
  actions.createPage({
    path: '/',
    component: require.resolve('./src/pages/HomePage.js'), // Path to your homepage component
    context: {
      // You can pass additional data to your components here
      // Data fetched from GraphQL can be passed here for dynamic content
    },
  });

  // Create About Page
  actions.createPage({
    path: '/about',
    component: require.resolve('./src/pages/AboutPage.js'), // Path to your about page component
    context: {
      // Additional context if needed
    },
  });
};