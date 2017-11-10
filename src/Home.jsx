import React from 'react';
import Gallery from './Gallery'

const STUDIO_ALBUM_ID = '72157683777711661'

export default () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Studio fotograficzne w Krakowie do wynajęcia</h1>

        <p>
          Studio fotograficzne znajduje się na ulicy Stefana Batorego, w samym centrum Krakowa, blisko Starego Miasta i Alej Adama Mickiewicza. Położone w pięknej kamienicy z początku XX. wieku, oferuje niepowtarzalny klimat. Urządzając studio najbardziej nam zależało na tym, aby przyjemnie się tu pracowało i było maksymalnie dostosowane do pracy z dziećmi, sądząc po rzeszy stałych klientów, chyba się udało.
        </p>

        <p>
          Mamy piękne scenerie takie jak: «Czułość», «Pokój dziecięcy», «Toaletka dla maleńkiej ślicznotki», pokój dla sesji noworodkowych i dużo innych.
        </p>
        <Gallery albumId={STUDIO_ALBUM_ID} />
      </div>
    </div>
  )
}

