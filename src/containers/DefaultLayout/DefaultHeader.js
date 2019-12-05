import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types';

import logo from 'assets/img/logo-yellow.svg'
import altlogo from 'assets/img/logo-grey.svg'

const propTypes = {
  children: PropTypes.node,
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const DefaultHeader = ({change}) => {

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

    return (
      <React.Fragment>
        <Desktop >
          <Nav >
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Join Us</NavLink>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <NavLink href="#"><img src={change? altlogo : logo} /> </NavLink>
                <Mobile>
                  <NavbarToggler onClick={toggle} />
                </Mobile>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Contact</NavLink>
              </NavItem>
            </Nav>
        </Desktop>
        <Tablet>
          <Navbar style={{backgroundColor: '#FFF166'}}>
          <NavbarBrand className="mr-auto"><img src={change? logo : altlogo} /></NavbarBrand>
          <NavbarToggler onClick={toggle} right />
          <Collapse isOpen={open} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Methodology</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Trials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Concierge</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Start your Journey</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
        </Tablet>
        <Mobile>
          <Navbar style={{backgroundColor: '#FFF166'}}  light>
          <NavbarBrand className="mr-auto"><img src={change? logo : altlogo} /></NavbarBrand>
          <NavbarToggler onClick={toggle}  />
          <Collapse isOpen={open} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Methodology</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Trials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Concierge</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color: change? '#4C4D56': '#FFF166' }}>Start your Journey</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
        </Mobile>
      </React.Fragment>
    );

}

DefaultHeader.propTypes = propTypes;

export default DefaultHeader;
