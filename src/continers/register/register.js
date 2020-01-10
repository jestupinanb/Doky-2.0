import React, { Component } from 'react';
import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css'; 
import './register.css';
import './progresbar.css';

import background from "../../images/backgroundRegister.webp";

import { Menu1 } from '../../components/menuRegistro/menu1';
import { Menu2 } from '../../components/menuRegistro/menu2';
import { Menu3 } from '../../components/menuRegistro/menu3';
import { Menu4 } from '../../components/menuRegistro/menu4';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres: '',
            apellidos: '',
            fecha_nacimiento: '',
            ciudad: '',
            barrio: '',
            celular: '',
            telefono:'',
            email: '',
            password: '',
            role: 'Consumidor',
            idpage: 'menu1',
        }
    }

    menu1handler = (nombres, apellidos, fecha_nacimiento) => {
        this.setState({
            nombres, apellidos, fecha_nacimiento
        });
    }

    menu2handler = (ciudad, barrio, celular, telefono) => {
        this.setState({
            ciudad, barrio, celular, telefono
        });
    }

    menu3handler = (email, password, role) => {
        this.setState({
            email, password, role
        });
    }

    RegisterPageHandler = (param) => {
        this.setState({
            idpage: param
        });
    }

    renderSwitch(param) {
        switch (param) {
            case 'menu1':
                return <Menu1 RegisterPageHandler={this.RegisterPageHandler} menu1handler={this.menu1handler} nombres={this.state.nombres}  apellidos={this.state.apellidos} fecha_nacimiento={this.state.fecha_nacimiento}/>;
            case 'menu2':
                return <Menu2 RegisterPageHandler={this.RegisterPageHandler} menu2handler={this.menu2handler} ciudad={this.state.ciudad} barrio={this.state.barrio} celular={this.state.celular} telefono={this.state.telefono}/>;
            case 'menu3':
                return <Menu3 RegisterPageHandler={this.RegisterPageHandler} menu3handler={this.menu3handler} email={this.state.email} password={this.state.password} role={this.state.role}/>;
            case 'menu4':
                return <Menu4 RegisterPageHandler={this.RegisterPageHandler}  
                              nombres={this.state.nombres}  
                              apellidos={this.state.apellidos} 
                              fecha_nacimiento={this.state.fecha_nacimiento}
                              email={this.state.email} 
                              password={this.state.password} 
                              role={this.state.role}
                              ciudad={this.state.ciudad} 
                              barrio={this.state.barrio} 
                              celular={this.state.celular} 
                              telefono={this.state.telefono}
                        />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <img src={background} id="bge" alt="" style={{ zIndex: -1 }} />
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-8" style={{ textAlign: 'center' }}>
                            <div className='card pt-1' style={{background: 'rgba(255, 255, 255, 0.7)', margin:'10% 0 0 0'}}>
                                <h1>Crear Cuenta</h1>
                                <br />
                                {this.renderSwitch(this.state.idpage)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;