import React, { Component, useEffect } from 'react';
/* import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css'; */
/* import { Barra } from '../Barra/Barra.js'; */
import ServiciosContenedor from '../../components/servicios_contenedor/ServiciosContenedor'
import { ServiciosDispController } from '../../database/controllers/serviciosDisponibles_controller'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaltos } from '../../store/actions/saltos';

function SaltosPage() {
    const dispatch = useDispatch();

    const saltos = useSelector(state => state.saltos.saltos)

    useEffect(
        () => {
            dispatch(fetchSaltos())
        }, []
    )

    return (
        <div >
            <div className="container-fluid">
                <div className="row align-items-top">
                    <div className="col-md-12 col-lg-3 " >
                        {/* <Barra filterByLocalidad={this.filterByLocalidad} filtrarPorPrecio={this.filtrarPorPrecio}/> */}
                    </div>
                    <div className="col-md-12 col-lg-9 "  >
                        <h1 className="CurvyTextFontBig" style={{ margin: "5%", textAlign: "center" }}>
                            Saltos
                        </h1>
                        <ServiciosContenedor json={saltos} type="salto" ></ServiciosContenedor>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaltosPage;