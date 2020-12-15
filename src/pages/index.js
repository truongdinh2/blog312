import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { graphql, Link } from 'gatsby';
import { default as React } from "react";
import '../style/layout.css';
import Layout from "./layout";
export default function Home({ data }) {
  return (
    <>
      <Layout>
        <div className="backG">
          <h1 className="title">TCLEARNING</h1>
        </div>
        <div className="flexbox_i4">
          {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <Link to={node.fields.slug}  className="flexItem_i4 ">
              <div key={index}>
                <h3 >
                  {(index + 1)}. {node.frontmatter.title}
                  {/* <span style={{ color: `#BBB` }}>— {node.frontmatter.date}</span> */}
                </h3>
              </div>
            </Link>
          )}
        </div>
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


