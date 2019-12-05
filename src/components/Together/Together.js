import React from 'react'
import { Row, Col } from 'reactstrap'
import back from 'assets/img/weare.jpg'

const Together = () => {
    return (
        <Row className="together">
            <Col>
                <img src={back} alt="together" className="together__mainimage" />
                <div className="together__container">
                    <h1 className="together__weare">We are a</h1>
                    <h1 className="together__symbiome">Symbiome</h1>
                    <h4 className="together__description">
                        We can't learn about the future of health without you. We need you &mdash; your feedback, your insight, your reviews. Try one of our products and share your personal stories with us &mdash; together we will build solutions that improve skin health today & tomorrow.
                    </h4>
                </div>
            </Col>
        </Row>
    )
}

export default Together
