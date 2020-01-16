import React from 'react';
import { useHistory } from 'react-router-dom';
import { LINK_HOME } from '../../links';
import { LoginController } from '../../database/controllers/login_controller';
import { UserController } from '../../database/controllers/user_controller' 

async function signup(history,nombres, apellidos, fechaDeNacimiento, ciudad, barrio, celular, telefono, email, password, role) {
    try {
        const loginController = new LoginController()
        const userController = new UserController()
        const user = await loginController.createAccountWithEmailAndPassword(email, password);
        await userController.createUser(user.uid,
            {
                correo: email,
                tipo: role,
                nombres: nombres,
                apellidos: apellidos,
                fecha: fechaDeNacimiento,
                ciudad: ciudad,
                barrio: barrio,
                celular: celular,
                telefono: telefono
            });
            history.push(LINK_HOME)
    } catch (error) {
        console.log(error);
    }
}

function Menu4({ setIdPage, nombres, apellidos, fechaDeNacimiento, email, password, role, ciudad, barrio, celular, telefono }) {
    const history= useHistory()
    return (
        <div>
            <ul id="progressbar">
                <li className="active">Información básica</li>
                <li className="active">Contacto</li>
                <li className="active">Inicio Sesión</li>
                <li className="active">Confirmar Formulario</li>
            </ul>
            <div className="card WhiteColor" style={{ margin: '20px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className="BigTextFont">Confirmar Formulario</p>
                            <p className="MediumTextFont TextDarkMainColor">Información básica</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Nombres:</p>
                            <p className="ultraSmallTextFont">{nombres}</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Apellidos:</p>
                            <p className="ultraSmallTextFont">{apellidos}</p>
                        </div>
                        <div className='col-12'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Fecha Nacimiento:</p>
                            <p className="ultraSmallTextFont">{fechaDeNacimiento}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p className="MediumTextFont TextDarkMainColor">Contacto</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Ciudad:</p>
                            <p className="ultraSmallTextFont">{ciudad}</p>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Barrio:</p>
                            <p className="ultraSmallTextFont">{barrio}</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Celular:</p>
                            <p className="ultraSmallTextFont">{celular}</p>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Telefono:</p>
                            <p className="ultraSmallTextFont">{telefono}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p className="MediumTextFont TextDarkMainColor">Inicio Sesión</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Correo:</p>
                            <p className="ultraSmallTextFont">{email}</p>
                        </div>
                        <div className='col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Contraseña:</p>
                            <p className="ultraSmallTextFont">{password}</p>
                        </div>
                        <div className='col-12'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Rol:</p>
                            <p className="ultraSmallTextFont">{role}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-outline-success mr-1" onClick={() => setIdPage('menu3')}>Anterior</button>
                    <button type="button" className="btn btn-outline-warning ml-1" onClick={() => signup(history,nombres, apellidos, fechaDeNacimiento, ciudad, barrio, celular, telefono, email, password, role)}>
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu4;