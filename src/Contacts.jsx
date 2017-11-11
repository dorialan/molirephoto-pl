import React from 'react';
import Mailto from 'react-mailto';
import IconEnvelope from './icons/envelope.svg';
import IconPhone from './icons/phone.svg';
import IconMapMarker from './icons/map-marker.svg';
import Facebook from './Facebook';
import GoogleMap from './GoogleMap';

export default () => {
  return(
    <div>
      <GoogleMap />
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

          <Facebook />
        </div>
      </div>
    </div>
  )
}
