import React from "react";
import { graphql } from "gatsby";
import Layout from "../pages/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div style={{padding:'60px 0'}}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`