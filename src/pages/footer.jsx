import { Col, Row } from 'antd'
import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <Row style={{height: '20px'}}>

            </Row>
            <Row >
                <Col offset={10}>
                    <div className="footer">
                        tks you everybody come to my web blog.
                        <p> {props.author}, © 2020 </p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}
