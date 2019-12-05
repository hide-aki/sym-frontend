import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import SectionLink from '../SectionLink'
import EmailForm from '../EmailForm'
import yellow1 from 'assets/img/yellow1.png'
import simple from 'assets/img/simple.png'
import logo from 'assets/img/logo-yellow.svg'


const Symbiome = () => {
    return (
        <div className="symbiome">
           <div className="symbiome__width60">
              <Container className="symbiome__width100">
                  {/* <Row>
                      <Col>
                          <h1 className="symbiome__title">Don’t want to be a part of a trial? no problem. <br/>
                          Join the waitlist to our subscription service launching early 2020.</h1>
                      </Col>
                  </Row>

                  <Row>
                      <Col>
                          <h5 className="symbiome__description">We don’t spam, don’t bombard your inbox, and never sell your information to anyone. We’ll only send you information about our subscription services.</h5>
                          <SectionLink className="symbiome__sectionlink " text="Privacy Policy" image={yellow1} />
                      </Col>
                      <Col>
                          <EmailForm />
                      </Col>
                  </Row>
                  <Row>
                      <Col className="symbiome__remove__padding ">
                          <img src={simple} alt="simple" className="symbiome__image" />
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <h1 className="symbiome__title">Follow us on Instagram for subscription updates, exclusive <br />community events, and secert DM groups.</h1>
                          <SectionLink className="symbiome__sectionlink symbiome__profime__img" text="Check out our profile" image={yellow1} />
                      </Col>
                  </Row> */}
                  <Row>
                      <Col className="text-center">
                          <h1 className="symbiome__logo">Symbiome</h1>
                          <EmailForm className="symbiome__email" />
                      </Col>
                  </Row>
              </Container>
            </div>
        </div>
    )
}

export default Symbiome
