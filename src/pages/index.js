import 'antd/dist/antd.css';
import { graphql, Link } from 'gatsby';
import { default as React } from "react";
import '../style/layout.css';
import Layout from "./layout";
export default function Home({ data }) {
  return (
    <>
      <Layout>
        <h1 className="title">TCLEARNING</h1>
        <div className="new">
          <h4></h4>
          <div className="text">
            Manchester United played out a drab draw with neighbours
            City in the first derby of the season on Saturday.
            They next travel across the Pennines to take on the Premier League's
            bottom side Sheffield United on Thursday night. The Blades only have
            one point from their opening 12 matches, and three points will be imperative
            for Ole Gunnar
            Solskjaer's side if they want to stay in touch with the front-runners.
            </div>
          <figure>
            <img alt="mu" src="http://media.bongda.com.vn/resize/543x369/files/trang.nguyen/2018/01/15/nintchdbpict000370595006-1246.jpg" />
            <figcaption>lingardinho 2018</figcaption>
          </figure>
        </div>
        <p id="p">see more...</p>
        <div className="flexbox_i4">
          {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <Link to={node.fields.slug} className="flexItem_i4 ">
              <div key={index}>
                <h3 className="tieude" >
                  {(index + 1)}. {node.frontmatter.title}
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


