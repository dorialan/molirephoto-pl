import React from 'react';
import Mailto from 'react-mailto';

export default () => {
  return(
    <div>
      <iframe
        title="Map"
        width="100%"
        height="300"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=Molire%20studio%20fotograficzne&key=AIzaSyA7UCJfeZ62Ah1CXlZXB3aESR2LFiIx95I"
        allowfullscreen>
      </iframe>

      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h1>Nasze kontakty</h1>
          </div>
          <address>
            <ul className="fa-ul">
              <li><i className="fa-li fa fa-lg fa-envelope"></i>
                <Mailto email="info@molirephoto.pl" obfuscate={true}>
                  info@molirephoto.pl
                </Mailto>
              </li>
              <li><i className="fa-li fa fa-lg fa-phone"></i>793 764 553</li>
              <li><i className="fa-li fa fa-lg fa-map-marker"></i>ul. Stefana Batorego 22/2, 31-135, Kraków</li>
            </ul>
          </address>

          <div class="fb-page"
            data-href="https://www.facebook.com/MolirePhoto/"
            data-tabs="messages"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            data-width="1900"
          >
            <blockquote cite="https://www.facebook.com/MolirePhoto/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/MolirePhoto/">Molire - Studio fotograficzne w Krakowie</a>
            </blockquote>
          </div>

        </div>
      </div>
    </div>
  )
}
