import { Col, Row } from 'antd';
import { Link } from 'gatsby'
import React from 'react';
import 'antd/dist/antd.css';
import '../style/header.css';

export default function Header(props) {
    const { title } = props;
    // console.log(title,'title')
    return (
        <header className="flexbox_nav">
            <div className="flexitem_nav item0">
                <h3 className="color">
                    {title}
                </h3>
            </div>
            <div className="flexitem_nav item1" >
                <Link className="color" to="/">Home</Link>
            </div>
            <div className="flexitem_nav item2" >
                <Link className="color" to="/content">Content</Link>
            </div>
            <div className="flexitem_nav item3" >
                <Link className="color" to="/about">About </Link>
            </div>
        </header >
    )
}
