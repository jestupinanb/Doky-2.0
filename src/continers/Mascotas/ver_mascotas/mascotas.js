import React, { Component, useState, useEffect } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import './mascotas.css';

import { Link } from 'react-router-dom';
import MascotasCard from './componentes/mascotas_card';
import MascotasPrev from './componentes/mascotas_preview';

import { UserController } from '../../../database/controllers/user_controller';
import { LINK_REGISTRO_MASCOTAS } from '../../../links';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMascotas } from '../../../store/actions/mascotas';

function Mascotas() {
     const dispatch = useDispatch();

     useEffect(
         ()=>{
             dispatch(fetchMascotas())
         },[dispatch]
     )

    const [mascotaActual, setMascotaActual] = useState(0);

    const mascotas = useSelector(state =>state.mascotas.mascotas)

    let nombre, especie, raza, fechaNacimiento, condicionesEspeciales, enfermedades, descripcion;
    let table = [];
    let scroll;

    if (mascotas.length !== 0) {
        scroll = <div>
            <hr />
            <div className="card mb-3">
                <div className="card-body textcenter">
                    <h1 className="card-title TextDarkMainColor">Tus Mascotas</h1>
                    <br />
                    <div className="scrollmascotas border BackgroundColor">
                        {table}
                    </div>
                </div>
            </div>
        </div>
    }

    mascotas.map((data, index) => {
        if (index === mascotaActual) {
            nombre = data.nombre;
            especie = data.especie;
            raza = data.raza;
            fechaNacimiento = data.fechaNacimiento;
            condicionesEspeciales = data.condicionesEspeciales;
            enfermedades = data.enfermedades;
            descripcion = data.descipcion;
        }
        table.push(
            <MascotasPrev
                nombre={data.nombre}
                key={index}
                id={index}
                especie={data.especie}
                raza={data.raza}
                mascotashandler={setMascotaActual}
            />
        )

        return null;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <MascotasCard
                        nombre={nombre}
                        especie={especie}
                        raza={raza}
                        fechaNacimiento={fechaNacimiento}
                        condicionesEspeciales={condicionesEspeciales}
                        enfermedades={enfermedades}
                        descripcion={descripcion}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <div className="card mb-4">
                        <div className="card-body textcenter">
                            <h1 className=" card-title TextDarkMainColor mb-4">Registrar Mascota</h1>
                            <p className="card-subtitle text-muted mb-3">Con Doky puedes tener la información de todas tus mascotas siempre a la mano.</p>
                            <Link to={LINK_REGISTRO_MASCOTAS}><button className="btn btn-outline-success">Añadir Mascota</button></Link>
                        </div>
                    </div>
                    {scroll}
                </div>
            </div>
        </div>
    );
}

export default Mascotas;

