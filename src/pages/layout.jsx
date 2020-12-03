import React from 'react';
import Footer from './footer';
import Header from './header';
import '../style/index.css';
import 'antd/dist/antd.css';
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import { Col, Row } from 'antd';
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
      <Row style={{minHeight: '80vh'}}>
        <Col md={2}></Col>
        <Col md={20}>
          {children}
        </Col>
        <Col md={2}></Col>
      </Row>
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