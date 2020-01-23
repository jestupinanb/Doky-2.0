import React from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';

import './const_serv_card.css'

import { Link } from 'react-router-dom';

export default function ServiceCard(props) {

    let footer;
    let header;

    switch (props.type) {
        case "paseo":
            footer = <div className="card-footer bg-primary textcenter">
                <h3 className="mt-0 mb-1 TextWhiteColor">Paseo</h3>
            </div>
            break;
        case "veterinaria":
            footer = <div className="card-footer bg-success textcenter">
                <h3 className="mt-0 mb-1 TextWhiteColor">Veterinaria</h3>
            </div>
            break;
        case "guarderia":
            footer = <div className="card-footer bg-danger textcenter">
                <h3 className="mt-0 mb-1 TextWhiteColor">Guardería</h3>
            </div>
            break;
        case "salto":
            footer = <div className="card-footer bg-warning textcenter">
                <h3 className="mt-0 mb-1">Salto</h3>
            </div>
            break;
        default:
            break;
    }

    if (props.img === "" || props.img === null) {
        header = <div class="card-header textcenter">
            <h1 className="TextAltMainColor">{props.nombre}</h1>
        </div>;
    } else {
        header = <div className="serv-img-container textcenter">
            <img className="card-img-top img-fluid image-serv-card-cons" src={props.img} alt={props.nombre} />
            <h1 className="serv-img-title">{props.nombre}</h1>
        </div>;
    }

    return (
        <Link to={{
            pathname: `/MisServicios/${props.nombre}`,
            state: {
                tipo: props.type,
                nombre: props.nombre,
                puntuacion: props.puntuacion,
                precio: props.precio,
                horario: props.horario,
                localidad:props.localidad,
                barrio: props.barrio,
                descripcion: props.descripcion,
                duracion: props.duracionMax,
                img: props.img,
                nombrep: props.nombrep,
                apellidosp: props.apellidosp,
                telefonop: props.telefonop,
                imgp: props.imgp,
                idPrestador: props.idPrestador,
                idConsumidor: props.idConsumidor
            }
        }}>
            <div className="card">
                {header}
                <div className="card-body textcenter">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h4 className="TextDarkMainColor">Info Prestador</h4>
                            </div>
                            <div className="col-5 col-sm-12 col-lg-5 textcenter">
                                <img className="card-img-top rounded-circle ser-img-pers-cons" src={props.imgp} alt={props.nombrep} />
                            </div>
                            <div className="col-7 col-sm-12 col-lg-7">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                                <p className="MedsmTextFont TextUltraDarkColor">{props.nombrep}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Apellido:</p>
                                <p className="MedsmTextFont TextUltraDarkColor">{props.apellidosp}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Telefono:</p>
                                <p className="MedsmTextFont TextUltraDarkColor">{props.telefonop}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="TextDarkMainColor">Info Servicio</h4>
                            </div>
                            <div className="col-6 col-sm-12 col-lg-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                <p className="MedsmTextFont TextUltraDarkColor">{props.localidad}</p>
                            </div>
                            <div className="col-6 col-sm-12 col-lg-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                <p className="MedsmTextFont TextUltraDarkColor">{props.barrio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {footer}
            </div>
        </Link>
    );
}