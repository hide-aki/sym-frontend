import React from 'react'
import { Row, Col } from 'reactstrap'
import girl from 'assets/img/girl.png'

const Science = () => {
    return (
        <Row className="science">
            <Col>
                <div className="science__container">
                    <h1 className="science__science">Reset Your Skin's</h1>
                    <h1 className="science__luxury">Natural Biome</h1>
                    <h4 className="science__description">
                        Our microbial second skin plays a vital role in maintaining our health. &mdash; We need a healthy and balanced microbiome. Through a unique fusion of ancestral ingredients and plants, Symbiome's products return your skin and its microbiome back to its healthiest & happiest state.
                    </h4>
                </div>
                <img src={girl} alt="science" className="science__mainimage" />
            </Col>
        </Row>
    )
}

export default Science
