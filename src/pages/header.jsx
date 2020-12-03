import { Col, Row } from 'antd';
import { Link } from 'gatsby'
import React from 'react';
import 'antd/dist/antd.css';

export default function Header(props) {
    const { title } = props;
    // console.log(title,'title')
    return (
        <header>
            <Row  style={{padding: '15px 0'}}>
                <Col offset={2} md={10}>
                    <h3 className="color">
                        {title}
                    </h3>
                </Col>
                <Col md={4}>
                    <Link className="color" to="/">Home</Link>
                </Col>
                <Col md={4}>
                    <Link className="color" to="/content">Content</Link>
                </Col>
                <Col md={4}>
                    <Link className="color" to="/about">About </Link>
                </Col>
            </Row>
        </header >
    )
}
