const path = require('path')


// Add a reporter to see how long it takes to generate blog posts.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog posts
  const blogPost = path.resolve('./src/templates/blog-post.js')

  let result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    console.log(result.errors)
    reject(result.errors)
  }

  const posts = result.data.allContentfulBlogPost.edges
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    })
  })

  // Create arbitrary pages
  for (let index = 0; index < 100; index++) {
    const splines = await reticulateSplines()

    createPage({
      path: `/test/${index}`,
      component: path.resolve(`./src/templates/test-template.js`),
      context: {
        page: index,
        splines
      }
    })

  }
}




exports.onPostBuild = () => {


}


























function reticulateSplines(ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}