import React, { Component, useState } from 'react';
import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './register.css';
import './progresbar.css';

import background from "../../images/backgroundRegister.webp";

import Menu1  from '../../components/menuRegistro/menu1';
import Menu2  from '../../components/menuRegistro/menu2';
import Menu3  from '../../components/menuRegistro/menu3';
import Menu4  from '../../components/menuRegistro/menu4';

function renderSwitch(idPage, nombres, apellidos, fechaDeNacimiento, ciudad, barrio, celular, telefono, email, password, role
    , setNombres, setApellidos, setFechaDeNacimiento, setCiudad, setBarrio, setCelular, setTelefono, setEmail, setPassword, setRole, setIdPage) {
    switch (idPage) {
        case 'menu1':
            return <Menu1 setIdPage={setIdPage} setNombres={setNombres} setApellidos={setApellidos} setFechaDeNacimiento={setFechaDeNacimiento} nombres={nombres} apellidos={apellidos} fecha_nacimiento={fechaDeNacimiento} />;
        case 'menu2':
            return <Menu2 setIdPage={setIdPage} setCiudad={setCiudad} setCelular={setCelular} setBarrio={setBarrio} setTelefono={setTelefono} ciudad={ciudad} barrio={barrio} celular={celular} telefono={telefono} />;
        case 'menu3':
            return <Menu3 setIdPage={setIdPage} email={email} password={password} role={role} setRole={setRole} setEmail={setEmail} setPassword={setPassword} />;
        case 'menu4':
            return <Menu4 setIdPage={setIdPage}
                nombres={nombres}
                apellidos={apellidos}
                fechaDeNacimiento={fechaDeNacimiento}
                email={email}
                password={password}
                role={role}
                ciudad={ciudad}
                barrio={barrio}
                celular={celular}
                telefono={telefono}
            />;
        default:
            return null;
    }
}

function RegisterPage() {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [barrio, setBarrio] = useState('')
    const [celular, setCelular] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('Consumidor')
    const [idPage, setIdPage] = useState('menu1')
    
    return (
        <div>
            <img src={background} id="bge" alt="" style={{ zIndex: -1 }} />
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-11 col-md-8" style={{ textAlign: 'center' }}>
                        <div className='card pt-1' style={{ background: 'rgba(255, 255, 255, 0.7)', margin: '10% 0 0 0' }}>
                            <h1>Crear Cuenta</h1>
                            <br />
                            {renderSwitch(idPage, nombres, apellidos, fechaDeNacimiento, ciudad, barrio, celular, telefono, email, password, role
                                , setNombres, setApellidos, setFechaDeNacimiento, setCiudad, setBarrio, setCelular, setTelefono, setEmail, setPassword, setRole, setIdPage)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;