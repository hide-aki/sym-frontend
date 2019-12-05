import React from 'react'
import { Row, Col } from 'reactstrap'
import stone from 'assets/img/Ingredients.jpg'

const Ingredients = () => {
    return (
        <Row className="ingredients">
            <Col>
                <img src={stone} alt="stone" className="ingredients__mainimage" />
                <div className="ingredients__container">
                    <h1 className="ingredients__ingredients">Ingredients</h1>
                    <h4 className="ingredients__description">
                        Thousands of years of wisdom in a bottle. All ingredients are natural, organic, 100% sustainable and traceable, and cruelty free. All products are minimally-formulated using only what is necessary to create safe & effective results.
                    </h4>
                </div>
            </Col>
        </Row>
    )
}

export default Ingredients
