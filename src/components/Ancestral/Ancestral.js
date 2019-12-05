import React from 'react'
import ancestral from 'assets/img/cropped.jpg'
import { Col, Row } from 'reactstrap'

const Ancestral = () => {

 // getAncestral = () => {
 //   var x = window.matchMedia("(max-width: 767px)")
 //   var y = window.matchMedia("(max-width: 719px)")
 //   var z = window.matchMedia("(max-width: 479px)")
 //   var w = window.matchMedia("(max-width: 419px)")
 //   var k = window.matchMedia("(max-width: 359px)")
 //   if (x.matches) {
 //      return(
 //
 //      )
 //   }
 // }

    return (
        <Row className="ancestral">
            <Col>
                <div className="ancestral__container">
                    <h1 className="ancestral__ancestral">Ancestral</h1>
                    <h1 className="ancestral__health">Health</h1>
                    <h4 className="ancestral__description">We are working with a group of hunter-gatherers deep in the Amazon in an unprecedented collaboration to examine what a healthy human looked like 12,000 years ago</h4>
                </div>
                <img src={ancestral} alt="Ancestral" className="ancestral__mainimage" />
            </Col>
        </Row>
    )
}

export default Ancestral
