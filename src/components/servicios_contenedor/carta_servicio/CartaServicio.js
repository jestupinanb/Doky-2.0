import React from 'react';

/* import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css'; */
import './cartaServicio.css';
import { useHistory, useLocation } from 'react-router-dom';

const estrellas = (props) => {
    if (0 < props.calificacion && props.calificacion < 0.5) {
        return "valoracion val-0"
    }
    if (0.5 <= props.calificacion && props.calificacion < 1) {
        return "valoracion val-5"
    }
    if (1 <= props.calificacion && props.calificacion < 1.5) {
        return "valoracion val-10"
    }
    if (1.5 <= props.calificacion && props.calificacion < 2) {
        return "valoracion val-15"
    }
    if (2 <= props.calificacion && props.calificacion < 2.5) {
        return "valoracion val-20"
    }
    if (2.5 <= props.calificacion & props.calificacion < 3) {
        return "valoracion val-25"
    }
    if (3 <= props.calificacion & props.calificacion < 3.5) {
        return "valoracion val-30"
    }
    if (3.5 <= props.calificacion & props.calificacion < 4) {
        return "valoracion val-35"
    }
    if (4 <= props.calificacion & props.calificacion < 4.5) {
        return "valoracion val-40"
    }
    if (4.5 <= props.calificacion & props.calificacion < 5) {
        return "valoracion val-45"
    }
    if (5 === props.calificacion) {
        return "valoracion val-50"
    }
    return "valoracion val-0"
}


function CartaServicio(props) {
    const history = useHistory();
    const location = useLocation();
    return (
        <div className="WhiteColor card" style={{ borderRadius: 10 }}>
            <button className="button_card text-justify" onClick={() => history.push({
                pathname: location.pathname + `/${props.id}`,
                state: {
                    id: props.id,
                    id_user: props.usuario
                }
            })} >
                <div className="container-fluid" >
                    <div className="row align-items-top" >
                        <div className="col-4 col-sm-3 col-md-3 col-lg-4 " >

                            <img className="img_card" src={props.foto} title={props.servicename} alt={props.servicename} style={{ maxHeight: 400 }}></img>
                        </div>
                        <div className="col-8 col-md-9 col-lg-8 "  >
                            <h1 className="TextFont MediumTextFont overflow-hidden" style={{ height: 60 }}>{props.servicename}</h1>
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props)}></span></fieldset>
                            <p className="SmallTextFont card-text overflow-hidden" style={{ height: 70 }}>{props.descripcion}</p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export { CartaServicio };