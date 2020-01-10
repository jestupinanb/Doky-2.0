import React, { Component } from 'react';
/* 
import { LoginController } from '../../../../controllers/login_controller';
import { UserController } from '../../../../controllers/user_controller' 
*/

class Menu4 extends Component {
    constructor(props) {
        super(props);
        // We will use the LoginController for registration, so I'll add it to this class
        /* this.loginController = new LoginController();
        this.userController = new UserController(); */
        this.signup = this.signup.bind(this);
    }

    async signup(event) {
        try {
            // We prevent the default cases so avoid submitting the form
            event.preventDefault();
            // Here we will use the method in the controller for signing up
            // That method will be the responsible for start a session into the browser's cookies once the user
            // is created, so we don't need any more for checking if the auth was successful
            const user = await this.loginController.createAccountWithEmailAndPassword(this.props.email, this.props.password);
            /* await this.userController.createUser(user.uid,
                {
                correo:this.props.email,
                tipo: this.props.role, 
                nombres: this.props.nombres, 
                apellidos:this.props.apellidos, 
                fecha:this.props.fecha_nacimiento, 
                ciudad:this.props.ciudad,
                barrio:this.props.barrio, 
                celular:this.props.celular,
                telefono:this.props.telefono
            }); */
        } catch (error) {
            // In the case that there is an error, we will log it in the console
            console.log(error);
        }
    }

    render() {
        return (
            <div>
            <ul id="progressbar">
                <li className="active">Información básica</li>
                <li className="active">Contacto</li>
                <li className="active">Inicio Sesión</li>
                <li className="active">Confirmar Formulario</li>
            </ul>
            <div className="card WhiteColor" style={{ margin: '20px' }}>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <p className="BigTextFont">Confirmar Formulario</p>
                            <p className="MediumTextFont TextDarkMainColor">Información básica</p> 
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Nombres:</p>
                            <p className="ultraSmallTextFont">{this.props.nombres}</p>
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Apellidos:</p>
                            <p className="ultraSmallTextFont">{this.props.apellidos}</p>
                        </div>
                        <div className = 'col-12'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Fecha Nacimiento:</p>
                            <p className="ultraSmallTextFont">{this.props.fecha_nacimiento}</p>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <p className="MediumTextFont TextDarkMainColor">Contacto</p>
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Ciudad:</p>
                            <p className="ultraSmallTextFont">{this.props.ciudad}</p>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Barrio:</p>
                            <p className="ultraSmallTextFont">{this.props.barrio}</p>
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Celular:</p>
                            <p className="ultraSmallTextFont">{this.props.celular}</p>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Telefono:</p>
                            <p className="ultraSmallTextFont">{this.props.telefono}</p>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <p className="MediumTextFont TextDarkMainColor">Inicio Sesión</p>
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Correo:</p>
                            <p className="ultraSmallTextFont">{this.props.email}</p>
                        </div>
                        <div className = 'col-6'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Contraseña:</p>
                            <p className="ultraSmallTextFont">{this.props.password}</p>
                        </div>
                        <div className = 'col-12'>
                            <p className="ultraSmallTextFont TextAltMainColor userparamtext">Rol:</p>
                            <p className="ultraSmallTextFont">{this.props.role}</p>
                        </div>
                    </div>   
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-outline-success mr-1" onClick={() => { this.props.RegisterPageHandler('menu3') }}>Anterior</button>
                    <button type="button" className="btn btn-outline-warning ml-1" onClick={this.signup}>
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
        );
    }
}

export { Menu4 };