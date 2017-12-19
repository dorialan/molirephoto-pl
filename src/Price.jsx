import React from 'react';
import Facebook from './Facebook';

export default () => {
  return(
    <div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>Ceny wynajmu studia</h1>
          <p>
            1 sala - <strong>35zł</strong>/godz. bez światła<br />
            2 sala - <strong>45zł</strong>/godz. bez światła<br />
            3 sala - <strong>35zł</strong>/godz. bez światła<br />
          </p>

          <p>
            Kiedy wynajem osobnej sali sprzęt oświetleniowy za sztukę - <strong>10zł</strong>/godz.
          </p>

          <p>
            Cena wynajmu całego studia, atrybutów ze sprzętem lub światłem dziennym — <strong>80zł</strong>/godzinę.<br />
            Świąteczna sala <strong>65zł</strong>/godz.
          </p>

          <p>
            Wynajem na 5 godz. - <strong>380zł</strong>.<br />
            Wynajem na cały dzień - <strong>600zł</strong>.
          </p>

          <Facebook />
        </div>
      </div>
    </div>
  )
}
