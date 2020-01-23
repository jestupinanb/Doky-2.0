import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import './misServicios.css'


import { Chat } from './chat';
import { Start } from './start';

class MisServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            background: "container-fluid",
            show_start: false
        }
    }



    estrellas = (calificacion) => {

        if (0 < calificacion && calificacion < 0.5) {
            return "valoracion val-0"
        }
        if (0.5 <= calificacion && calificacion < 1) {
            return "valoracion val-5"
        }
        if (1 <= calificacion && calificacion < 1.5) {
            return "valoracion val-10"
        }
        if (1.5 <= calificacion && calificacion < 2) {
            return "valoracion val-15"
        }
        if (2 <= calificacion && calificacion < 2.5) {
            return "valoracion val-20"
        }
        if (2.5 <= calificacion & calificacion < 3) {
            return "valoracion val-25"
        }
        if (3 <= calificacion & calificacion < 3.5) {
            return "valoracion val-30"
        }
        if (3.5 <= calificacion & calificacion < 4) {
            return "valoracion val-35"
        }
        if (4 <= calificacion & calificacion < 4.5) {
            return "valoracion val-40"
        }
        if (4.5 <= calificacion & calificacion < 5) {
            return "valoracion val-45"
        }
        if (5 === calificacion) {
            return "valoracion val-50"
        }
        return "valoracion val-0"
    }

    handle = (someB, someS) => {
        this.setState({
            background: someB,
            show_start: someS
        })
    }

    puntuacion = (punt) => {
        if (punt) {
            return parseFloat(punt.toFixed(1))
        }
        else {
            return 0
        }
    }
    render() {



        return (
            <div>

                <div className={this.state.background}>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-5" >
                            <div className="WhiteColor card ContainerInfo">
                                <br></br>
                                <InformacionBasicaServicio

                                    fotosrc={this.props.location.state.img}
                                    nombre={this.props.location.state.nombre}
                                    calificación={this.puntuacion(this.props.location.state.puntuacion)}
                                    precio={this.props.location.state.precio}
                                    horario={this.props.location.state.horario}
                                    localidad={this.props.location.state.localidad}
                                    barrio={this.props.location.state.barrio}
                                    descripcion={this.props.location.state.descripcion}
                                    duracion={this.props.location.state.duracion}
                                    estrellas={this.estrellas(this.props.location.state.puntuacion)}

                                />
                                <br></br>
                                <Start
                                    show={this.state.show_start}
                                    volver={this.handle}
                                    nombre={this.props.location.state.nombre}
                                    tipo={this.props.location.state.tipo}
                                    idc =  {this.props.location.state.idConsumidor}
                                    idp= {this.props.location.state.idPrestador}
                                ></Start>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    this.handle("container-fluid backdrop-consumer", true)

                                }}
                                >
                                    Finalizar servicio
                                </button>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-5"  >
                            <div className="WhiteColor card ContainerInfo">
                                <br></br>
                                <InformacionBasicaPerfil
                                    nombre={this.props.location.state.nombrep}
                                    appellido={this.props.location.state.apellidosp}
                                    fotosrc={this.props.location.state.imgp}
                                    celular={this.props.location.state.telefonop}


                                />
                            </div>
                            <div className="WhiteColor card ContainerInfo">
                                <Chat
                                    id_user =  {this.props.location.state.idConsumidor}
                                    id_prestador= {this.props.location.state.idPrestador}
                                ></Chat>
                                <br></br>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export { MisServicios };

function InformacionBasicaServicio(props) {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-2 mt-0">
                        <p className="MediumTextFont BigTextFont TextDarkMainColor ">Información Servicio</p>
                    </div>
                    <div className="col-12 text-center mb-3">
                        <img className="img-fluid"
                            src={props.fotosrc}
                            title={props.nombre}
                            alt={props.nombre}
                            style={{ maxHeight: "340px" }}
                        >
                        </img>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                        <p className="MediumTextFont">{props.nombre}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Calificación:</p>
                        <div className="row">

                            <div className="col-4 col-md-4 col-sm-4">
                                <p className="MediumTextFont">{props.calificación}</p>
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                <fieldset className="val-fieldset" ><legend></legend><span className={props.estrellas}></span></fieldset>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                        <p className="MediumTextFont">{props.precio}</p>

                    </div>
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Horario:</p>
                        <p className="MediumTextFont">{props.horario}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                        <p className="MediumTextFont">{props.localidad}</p>

                    </div>
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                        <p className="MediumTextFont">{props.barrio}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Maxima duración:</p>
                        <p className="MediumTextFont">{props.duracion}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Descripción:</p>
                        <p className="MediumTextFont">{props.descripcion}</p>

                    </div>
                </div>
            </div>
        </>
    );
}

function InformacionBasicaPerfil(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p className="MediumTextFont BigTextFont TextDarkMainColor">Información Prestador</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <img className="consusmerimgsevpage mb-4"
                            src={props.fotosrc}
                            title={props.nombre}
                            alt={props.nombre}
                        >
                        </img>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                                <p className="MediumTextFont">{props.nombre}</p>
                            </div>
                            <div className="col-12 col-md-12">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Apellido:</p>
                                <p className="MediumTextFont">{props.appellido}</p>
                            </div>
                            <div className="col-12 col-md-12">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Celular:</p>
                                <p className="MediumTextFont">{props.celular}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

