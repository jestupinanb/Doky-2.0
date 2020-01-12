import React, { Component } from 'react'
import foto1 from '../../images/carrusel/imagen1.jpg';
import foto2 from '../../images/carrusel/imagen2.jpg';
import foto3 from '../../images/carrusel/imagen3.jpg';
import './carrusel.css';

function Carrusel(){
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner text-align text-font">
                    <div className="carousel-item active" data-interval="1000">
                        <img src={foto1} className="d-block w-100" alt="logo"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-uppercase">Un mundo de posibilidades</h5>
                            <p>Para el cuidado de tu mascota.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={foto2} className="d-block w-100" alt="logo"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-uppercase">La única aplicación que te ofrece</h5>
                            <p>El servicio de saltos.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={foto3} className="d-block w-100" alt="logo"></img>
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-uppercase">Lo que quieres para tu mascota </h5>
                            <p>En un solo lugar.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        );
}
export default Carrusel;