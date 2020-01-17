import React, { Component } from 'react';

/* import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css'; */
import './cartaServicio.css';
import { Link } from 'react-router-dom';

class CartaServicio extends Component {

    estrellas = () => {
        if (0 < this.props.calificacion && this.props.calificacion < 0.5) {
            return "valoracion val-0"
        }
        if (0.5 <= this.props.calificacion && this.props.calificacion < 1) {
            return "valoracion val-5"
        }
        if (1 <= this.props.calificacion && this.props.calificacion < 1.5) {
            return "valoracion val-10"
        }
        if (1.5 <= this.props.calificacion && this.props.calificacion < 2) {
            return "valoracion val-15"
        }
        if (2 <= this.props.calificacion && this.props.calificacion < 2.5) {
            return "valoracion val-20"
        }
        if (2.5 <= this.props.calificacion & this.props.calificacion < 3) {
            return "valoracion val-25"
        }
        if (3 <= this.props.calificacion & this.props.calificacion < 3.5) {
            return "valoracion val-30"
        }
        if (3.5 <= this.props.calificacion & this.props.calificacion < 4) {
            return "valoracion val-35"
        }
        if (4 <= this.props.calificacion & this.props.calificacion < 4.5) {
            return "valoracion val-40"
        }
        if (4.5 <= this.props.calificacion & this.props.calificacion < 5) {
            return "valoracion val-45"
        }
        if (5 === this.props.calificacion) {
            return "valoracion val-50"
        }
        return "valoracion val-0"
    }

    render() {
        const id = this.props.id;
        const id_user = this.props.usuario
        const link = "/" + this.props.type +`/${id}`;

        return (
            <div className="WhiteColor card" style={{ borderRadius: 10}}>
               
                <Link to={{
                    pathname : link,
                    state : {id : id ,
                            id_user:  id_user
                            }
                }}
                 >
                <button className="button_card text-justify" >
                    <div className="container-fluid" >
                        <div className="row align-items-top" >
                            <div className="col-4 col-sm-3 col-md-3 col-lg-4 " >
                                
                                <img className="img_card" src={this.props.foto} title={this.props.servicename} alt={this.props.servicename}style ={{maxHeight :400}}></img>
                            </div>
                            <div className="col-8 col-md-9 col-lg-8 "  >
                                <h1 className="TextFont MediumTextFont overflow-hidden" style ={{height:60}}>{this.props.servicename}</h1>
                                <fieldset className="val-fieldset" ><legend></legend><span className={this.estrellas()}></span></fieldset>
                                 <p className="SmallTextFont card-text overflow-hidden" style ={{height:70}}>{this.props.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </button>
                </Link>
            </div>
        );
    }
}

export { CartaServicio };