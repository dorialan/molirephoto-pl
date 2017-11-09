import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import IconFacebook from './icons/facebook.svg';
import IconPhone from './icons/phone.svg';
import IconInstagram from './icons/instagram.svg';
import IconMapMarker from './icons/map-marker.svg';

const Header = ({location}) => {
  return(
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">

              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Molire" onError="this.onerror=null; this.src='images/logo.png'" style={{height: "40px"}} />
              </Link>
              <Link className="navbar-brand navbar-brand-text hidden-xs" to="/">Studio fotograficzne</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="main-menu-margin">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li className={location.pathname.match(/\/$/) && "active"}><Link to="/">O nas</Link></li>
                <li className={location.pathname.match(/portfolio/) && "active"}><Link to="/portfolio">Portfolio</Link></li>
                <li className={location.pathname.match(/kontakty/) && "active"}><Link to="/kontakty">Kontakty</Link></li>
              </ul>

              <p className="navbar-text navbar-right">
                <Link to="https://www.facebook.com/MolirePhoto/" rel="nofollow noopener noreferrer" target="_blank">
                  <img src={IconFacebook} className="fa-li icon" alt="Facebook"></img>facebook
                </Link>
              </p>
              <p className="navbar-text navbar-right hidden-sm">
                <a href="https://www.instagram.com/molirephoto/" rel="nofollow noopener noreferrer" target="_blank">
                  <img src={IconInstagram} className="fa-li icon" alt="Instagram"></img>instagram
                </a>
              </p>
              <p className="navbar-text navbar-right hidden-sm">
                <img src={IconPhone} className="fa-li icon" alt="Instagram"></img>793 764 553
              </p>
              <p className="navbar-text navbar-left visible-xs">
                <a href="https://goo.gl/maps/WbDr6JJodVS2" rel="nofollow noopener noreferrer" target="_blank">
                  <img src={IconMapMarker} className="fa-li icon" alt="Map"></img>ul. Stefana Batorego 22/2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(props => <Header {...props}/>);
