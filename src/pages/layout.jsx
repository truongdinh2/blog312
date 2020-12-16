import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import '../style/index.css';
import Footer from './footer';
import Header from './header';
export default function Layout(props) {
  const { children } = props;
  // console.log(data)
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }`
  )
  return (
    <>
      <Header
        title={data.site.siteMetadata.title}
      />
      <main style={{minHeight:"80vh", margin:'0px 10%'}}>
        {children}
      </main>
      <Footer
        author={data.site.siteMetadata.author}
      />
    </>
  )
}

























  // <StaticQuery
  //   query={graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `} render={data => (
  //     <div>
  //       <Header title={data.site.siteMetadata.title} />
  //       {children}
  //       <Footer />
  //     </div>
  //   )}
  // />