import React, { Component, useEffect } from 'react';
/* import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css'; */
/* import { Barra } from '../Barra/Barra.js'; */
import ServiciosContenedor from '../../components/servicios_contenedor/ServiciosContenedor'
import { ServiciosDispController } from '../../database/controllers/serviciosDisponibles_controller'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaseos } from '../../store/actions/paseos';

function PaseosPage() {
    const dispatch = useDispatch();

    const paseos = useSelector(state => state.paseos.paseos)

    useEffect(
        () => {
            dispatch(fetchPaseos())
        }, []
    )
    /*     filterByLocalidad = async(localidad) =>{
            if(localidad){
                var serviciosDispController = new ServiciosDispController();
                const paseos =  await serviciosDispController.readServicioPaseoFiltroLocalidad(localidad);
                this.setState({paseos:paseos})
            }else{
                this.readAllPaseos();
            }
        }
    
        filtrarPorPrecio = async(min=0,max=0) =>{
            if(min && max){
                var serviciosDispController = new ServiciosDispController();
                const paseos = await serviciosDispController.readServicioPaseoFiltroPrecio(min,max);
                this.setState({paseos:paseos});
            }else{
                this.readAllPaseos();
            }
        } */

    return (
        <div >
            <div className="container-fluid">
                <div className="row align-items-top">
                    <div className="col-md-12 col-lg-3 " >
                        {/* <Barra filterByLocalidad={this.filterByLocalidad} filtrarPorPrecio={this.filtrarPorPrecio}/> */}
                    </div>
                    <div className="col-md-12 col-lg-9 "  >
                        <h1 className="CurvyTextFontBig" style={{ margin: "5%", textAlign: "center" }}>
                            Paseos
                        </h1>
                        <ServiciosContenedor json={paseos} type="Paseos" ></ServiciosContenedor>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaseosPage;