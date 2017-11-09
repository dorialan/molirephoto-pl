import React from 'react';
import Mailto from 'react-mailto';
import IconEnvelope from './icons/envelope.svg';
import IconPhone from './icons/phone.svg';
import IconMapMarker from './icons/map-marker.svg';

export default () => {
  return(
    <div>
      <iframe
        title="Map"
        width="100%"
        height="300"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=Molire%20studio%20fotograficzne&key=AIzaSyA7UCJfeZ62Ah1CXlZXB3aESR2LFiIx95I"
        allowFullScreen>
      </iframe>

      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h1>Nasze kontakty</h1>
          </div>
          <address>
            <ul className="fa-ul">
              <li><img src={IconEnvelope} className="fa-li icon" alt="Envelope"></img>
                <Mailto email="info@molirephoto.pl" obfuscate={true}>
                  info@molirephoto.pl
                </Mailto>
              </li>
              <li><img src={IconPhone} className="fa-li icon" alt="Phone"></img>793 764 553</li>
              <li><img src={IconMapMarker} className="fa-li icon" alt="Map"></img>ul. Stefana Batorego 22/2, 31-135, Kraków</li>
            </ul>
          </address>

          <div className="fb-page"
            data-href="https://www.facebook.com/MolirePhoto/"
            data-tabs="messages"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            data-width="1900"
          >
            <blockquote cite="https://www.facebook.com/MolirePhoto/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/MolirePhoto/">Molire - Studio fotograficzne w Krakowie</a>
            </blockquote>
          </div>

        </div>
      </div>
    </div>
  )
}
