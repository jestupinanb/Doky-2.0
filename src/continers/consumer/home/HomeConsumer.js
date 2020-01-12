import React, { Component } from 'react';

import Carrusel from '../../../components/carrusel/carrusel';
import Service from './components/service/Service.js';
import Footer from '../../../components/footer/Footer';

class HomeConsumer extends Component {
  render() {
    return (
      <div className="color-backgroud">
        <div className="text-align text-font ">
          <Carrusel/>
          <h1 className="text-section padding-section">Nuestros servicios</h1>
          <Service/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export { HomeConsumer }; 