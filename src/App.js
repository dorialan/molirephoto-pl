import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />

          <div className="row">
            <div className="col-md-12">
              <h1>Studio fotograficzne w Krakowie do wynajęcia</h1>

              <p>
                Studio fotograficzne znajduje się na ulicy Stefana Batorego, w samym centrum Krakowa, blisko Starego Miasta i Alej Adama Mickiewicza. Położone w pięknej kamienicy z początku XX. wieku, oferuje niepowtarzalny klimat. Urządzając studio najbardziej nam zależało na tym, aby przyjemnie się tu pracowało i było maksymalnie dostosowane do pracy z dziećmi, sądząc po rzeszy stałych klientów, chyba się udało.
              </p>

              <p>
                Mamy piękne scenerie takie jak: «Czułość», «Pokój dziecięcy», «Toaletka dla maleńkiej ślicznotki», pokój dla sesji noworodkowych i dużo innych.
              </p>
            </div>
          </div>

          <center id="loading">
            <br />
            <br />
            <img src="/images/loading.gif" alt="Loading" />
          </center>

        </div>
        <p>&nbsp;</p>

        <Footer />
      </div>
    );
  }
}

export default App;
