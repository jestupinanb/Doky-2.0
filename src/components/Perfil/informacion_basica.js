import React from 'react'
import './perfil.css';

function InformacionBasica(props) {
    return (
        <>
            <div className="col-12 col-md-5 text-center">
                <div className="show-image">
                    <img className="consusmerimg"
                        src={props.fotosrc}
                        title={props.nombre}
                        alt={props.nombre}
                    >
                    </img>
                    <div className="hover-img"
                        onClick={() =>{props.onClick()}}
                    >
                        <h1 className="place-text h2"><strong>Cambiar</strong></h1>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-7">
                <p className="MediumTextFont BigTextFont TextDarkMainColor">Información básica</p>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                        <p className="MediumTextFont">{props.nombre}</p>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Apellido:</p>
                        <p className="MediumTextFont">{props.appellido}</p>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Fecha de nacimiento:</p>
                        <p className="MediumTextFont">{props.fecha_nacimiento}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Ciudad:</p>
                        <p className="MediumTextFont">{props.ciudad}</p>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                        <p className="MediumTextFont">{props.barrio}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformacionBasica