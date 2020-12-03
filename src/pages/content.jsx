import { Col, Row } from 'antd';
import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from './layout'

export default function Content(props) {
  const { data } = props;
  return (
    <>
      <Layout>
        <Row>
          <Col offset={10}>
            <h2 className="title">New posts</h2>
          </Col>
        </Row>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <div key={index}>
            <h3 style={{paddingTop: '20px',}}>
  <Link to={node.fields.slug}>{(index+1)}. {node.frontmatter.title}</Link>
              <span style={{ color: `#BBB` }}>— {node.frontmatter.date}</span>
            </h3>
            <p style={{marginLeft: '20px'}}>{node.excerpt}</p>
            {/* <h3>{node.frontmatter.title}
                            <span style={{ color: `#BBB` }}>— {node.frontmatter.date}</span>
                        </h3>
                        <p>{node.excerpt}</p> */}
          </div>
        )}
      </Layout>
    </>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//         sort: {order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "DD/MM/YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `