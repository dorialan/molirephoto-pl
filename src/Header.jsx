import React from 'react';
import logo from './logo.svg';

export default () => {
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
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Molire" onError="this.onerror=null; this.src='images/logo.png'" style={{height: "40px"}} />
              </a>
              <a className="navbar-brand navbar-brand-text hidden-xs" href="/">Studio fotograficzne</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="main-menu-margin">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li className="<%= current == 'about' ? 'active' : '' %>"><a href="/">O nas</a></li>
                <li className="<%= current == 'portfolio' ? 'active' : '' %>"><a href="/portfolio">Portfolio</a></li>
                <li className="<%= current == 'contacts' ? 'active' : '' %>"><a href="/kontakty">Kontakty</a></li>
              </ul>

              <p className="navbar-text navbar-right">
                <a href="https://www.facebook.com/MolirePhoto/" rel="nofollow noopener noreferrer" target="_blank">
                  <i className="fa fa-lg fa-facebook fa-fw" aria-hidden="true"></i> facebook
                </a>
              </p>
              <p className="navbar-text navbar-right hidden-sm">
                <a href="https://www.instagram.com/molirephoto/" rel="nofollow noopener noreferrer" target="_blank">
                  <i className="fa fa-lg fa-instagram fa-fw" aria-hidden="true"></i> instagram
                </a>
              </p>
              <p className="navbar-text navbar-right hidden-sm">
                <i className="fa fa-lg fa-phone fa-fw" aria-hidden="true"></i> 793 764 553
              </p>
              <p className="navbar-text navbar-left visible-xs">
                <a href="https://goo.gl/maps/WbDr6JJodVS2" rel="nofollow noopener noreferrer" target="_blank">
                  <i className="fa fa-lg fa-map-marker fa-fw" aria-hidden="true"></i> ul. Stefana Batorego 22/2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
