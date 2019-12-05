import React from 'react'

import {Row, Col} from 'reactstrap'

const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col className="mobile-device-col border-right border-bottom d-flex justify-content-center align-items-center text-center footer-style">
                    Your Trial<br/>
                    Register <br/>
                    Login
                </Col>
                <Col className="mobile-device-col border-right  border-bottom d-flex justify-content-center align-items-center  text-center footer-style">
                    Products<br />
                    Methodology<br />
                    Clinical Trials<br />
                    Conciegre services<br />
                    About us<br />
                </Col>
                <Col className="mobile-device-col border-right border-bottom d-flex justify-content-center align-items-center text-center footer-style">
                Instagram<br />
                #ItsMyJourney<br />
                </Col>
                <Col className="mobile-device-col border-right border-bottom d-flex justify-content-center align-items-center  text-center footer-style">
                Terms & Conditions<br />
                Privacy Policy<br />
                FAQs<br />
                Contact us<br />
                </Col>
                <Col className="border-right border-bottom d-flex justify-content-center align-items-center text-center footer-style">
                    953 Indiana Street, <br />
                    San Francisco, CA 94107<br />
                    +00 0000 0000<br />
                    hello@symbiomehealth.com
                </Col>
            </Row>
        </div>
    )
}

export default Footer
