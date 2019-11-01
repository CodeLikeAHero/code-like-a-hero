const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
        {
          allMarkdownRemark(
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    return reject(result.errors);
                }

                const blogTemplate = path.resolve('./src/templates/blog-post.js');
                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach(({ node }, index) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogTemplate,
                        context: {
                            slug: node.fields.slug,
                            prev: index === 0 ? null : posts[index - 1],
                            next: index === result.length - 1 ? null : posts[index + 1],
                        },
                    })
                });
                return
            })
        )
    })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};
