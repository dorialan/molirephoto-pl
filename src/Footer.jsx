import React from 'react';
import IconFacebook from './icons/facebook.svg';
import IconPhone from './icons/phone.svg';
import IconInstagram from './icons/instagram.svg';
import IconMapMarker from './icons/map-marker.svg';

export default () => {
  return (
    <nav className="navbar-inverse hidden-xs">
      <div className="container">
        <p className="navbar-text navbar-left">
          <a href="https://www.facebook.com/MolirePhoto/" rel="nofollow noopener noreferrer" target="_blank">
            <img src={IconFacebook} className="fa-li icon" alt="Facebook"></img>facebook
          </a>
        </p>
        <p className="navbar-text navbar-left">
          <a href="https://www.instagram.com/molirephoto/" rel="nofollow noopener noreferrer" target="_blank">
            <img src={IconInstagram} className="fa-li icon" alt="Instagram"></img>instagram
          </a>
        </p>
        <p className="navbar-text navbar-left">
          <img src={IconPhone} className="fa-li icon" alt="Instagram"></img>793 764 553
        </p>
        <p className="navbar-text navbar-left">
          <a href="https://goo.gl/maps/WbDr6JJodVS2" rel="nofollow noopener noreferrer" target="_blank">
            <img src={IconMapMarker} className="fa-li icon" alt="Map"></img>ul. Stefana Batorego 22/2
          </a>
        </p>
        <p className="navbar-text navbar-right">Molire Production &copy; 2017</p>
      </div>
    </nav>
  )
}
