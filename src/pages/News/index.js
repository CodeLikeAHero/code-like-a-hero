import React, {Component, Fragment} from 'react';
import { Link, graphql } from 'gatsby';
import '../../assets/css/posts.css';
import NavigationBar from '../../components/NavigationBar';
import Layout from '../../components/Layout';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const postList = this.props.data.allMarkdownRemark;

        return (
            <Fragment>
                <NavigationBar/>
                <Layout>
                    {postList.edges.map(({ node }, i) => (
                        <Link to={node.fields.slug} key={i} className="link" >
                            <div className="post-list">
                                <h1>{node.frontmatter.title}</h1>
                                <p>{node.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </Layout>
            </Fragment>
        )
    }
}

export default News;


export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark{
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`;