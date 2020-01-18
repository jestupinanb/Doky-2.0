import React, { Component } from 'react';
import './HomeConsumer.css'
import Carrusel from '../../../components/carrusel/carrusel';
import Footer from '../../../components/footer/Footer';
import pasear from '../../../images/services/pasear.jpg';
import salto from '../../../images/services/salto.jpg';
import veterinaria from '../../../images/services/veterinaria.jpg';
import guarderia from '../../../images/services/guarderia.jpg';
import CardSombra  from "../../../components/cards/cardSombra.js";
import { LINK_PASEOS, LINK_SALTOS , LINK_GUARDERIAS, LINK_VETERINARIAS} from '../../../links';

class HomeConsumer extends Component {
  render() {
    return (
      <div className="color-backgroud">
        <div className="text-align text-font ">
          <Carrusel/>
          <h1 className="text-section padding-section">Nuestros servicios</h1>
          <div className="container marketing text-align .text-font padding-card">
          <div className="row">
            <CardSombra titulo= "Paseos" descripcion="Accede a un catálogo de paseadores para tu mascota." foto = {pasear} link={LINK_PASEOS}/>
            <CardSombra titulo= "Veterinaria" descripcion="Encuentra la veterinaria de tu preferencia." foto = {veterinaria} link={LINK_VETERINARIAS} />
            <CardSombra titulo= "Guardería" descripcion="El mejor cuidado para tu mascota cuando no puedes estar con ella." foto = {guarderia} link={LINK_GUARDERIAS} />
            <CardSombra titulo= "Saltos" descripcion="Las mejores mascotas para tus cruces." foto = {salto} link={LINK_SALTOS} />
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomeConsumer; 