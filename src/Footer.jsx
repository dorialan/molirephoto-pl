import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import IconFacebook from './icons/facebook.svg';
import IconPhone from './icons/phone.svg';
import IconInstagram from './icons/instagram.svg';
import IconMapMarker from './icons/map-marker.svg';

export default () => {
  return (
    <Navbar fixedBottom inverse className="hidden-xs">
      <Nav>
        <NavItem href="https://www.facebook.com/MolirePhoto/" target="_blank">
          <img src={IconFacebook} className="fa-li icon" alt="Facebook"></img>facebook
        </NavItem>
        <NavItem href="https://www.instagram.com/molirephoto/" target="_blank">
          <img src={IconInstagram} className="fa-li icon" alt="Instagram"></img>instagram
        </NavItem>
        <NavItem>
          <img src={IconPhone} className="fa-li icon" alt="Phone"></img>793 764 553
        </NavItem>
        <NavItem href="https://goo.gl/maps/WbDr6JJodVS2" target="_blank">
          <img src={IconMapMarker} className="fa-li icon" alt="Map"></img>ul. S. Batorego 22/2
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          Molire Production &copy; 2017
        </NavItem>
      </Nav>
    </Navbar>
  )
}
