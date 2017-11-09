import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';
import IconFacebook from './icons/facebook.svg';
import IconPhone from './icons/phone.svg';
import IconInstagram from './icons/instagram.svg';
import IconMapMarker from './icons/map-marker.svg';

const Header = ({location, history}) => {
  return(
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">

        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="Molire" style={{ height: "40px" }} />
              </Link>
            </Navbar.Brand>
            <Link className="navbar-brand navbar-brand-text hidden-xs" to="/">Studio fotograficzne</Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeHref={location.pathname}>
              <NavItem href="/" onClick={() => history.replace("/")}>O nas</NavItem>
              <NavItem href="/portfolio" onClick={() => history.replace("/portfolio")}>Portfolio</NavItem>
              <NavItem href="/kontakty" onClick={() => history.replace("/kontakty")}>Kontakty</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="https://www.facebook.com/MolirePhoto/" target="_blank">
                <img src={IconFacebook} className="fa-li icon" alt="Facebook"></img>facebook
              </NavItem>
              <NavItem className="hidden-sm" href="https://www.instagram.com/molirephoto/" target="_blank">
                <img src={IconInstagram} className="fa-li icon" alt="Instagram"></img>instagram
              </NavItem>
              <NavItem className="hidden-sm">
                <img src={IconPhone} className="fa-li icon" alt="Phone"></img>793 764 553
              </NavItem>
              <NavItem className="visible-xs" href="https://goo.gl/maps/WbDr6JJodVS2" target="_blank">
                <img src={IconMapMarker} className="fa-li icon" alt="Map"></img>ul. S. Batorego 22/2
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </div>
    </div>
  )
}

export default withRouter(props => <Header {...props}/>);
