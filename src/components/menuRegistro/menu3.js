import React, { Component } from 'react';

class Menu3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            regemail: this.props.email,
            regpassword: this.props.password,
            role: this.props.role,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <ul id="progressbar">
                    <li className="active">Información básica</li>
                    <li className="active">Contacto</li>
                    <li className="active">Inicio Sesión</li>
                    <li>Confirmar Formulario</li>
                </ul>
                <div className="card WhiteColor" style={{ margin: '20px' }}>
                        <p className="MediumTextFont BigTextFont TextDarkMainColor">Inicio Sesión</p>
                        <form onSubmit={this.handleSubmit}>
                            <h6>CORREO:</h6>
                            <div className="input-group mb-3 loginandregisterinput">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <span className="oi oi-person" title="person" aria-hidden="true"></span>
                                    </span>
                                </div>
                                <input 
                                    type="email" 
                                    name="regemail" 
                                    value={this.state.regemail} 
                                    onChange={this.handleChange} 
                                    className="form-control" 
                                    placeholder="Correo" 
                                    aria-label="Correo" 
                                    aria-describedby="basic-addon1" />
                            </div>
                            <h6>CONTRASEÑA:</h6>
                            <div className="input-group mb-3 loginandregisterinput">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <span className="oi oi-chevron-right" title="person" aria-hidden="true"></span>
                                    </span>
                                </div>
                                <input 
                                    type="password" 
                                    name="regpassword" 
                                    value={this.state.regpassword} 
                                    onChange={this.handleChange} 
                                    className="form-control" 
                                    placeholder="Contraseña" 
                                    aria-label="Contraseña" 
                                    aria-describedby="basic-addon1" />
                            </div>
                            <h6>ROL:</h6>
                            <div className="input-group mb-4 loginandregisterinput">
                            <select className="theselect form-control" name="role" value={this.state.role} onChange={this.handleChange}>
                                <option value='Consumidor'>Consumidor</option>
                                <option value="Prestador">Prestador</option>
                            </select>
                            </div>
                        </form>
                    <div className="mb-3">
                        <button type="button" className="btn btn-outline-success mr-1" onClick={() => { this.props.RegisterPageHandler('menu2') 
                                                                                                   this.props.menu3handler(this.state.regemail, this.state.regpassword, this.state.role)}}>
                            Anterior
                        </button>
                        <button type="button" className="btn btn-outline-success ml-1" onClick={() => {  this.props.RegisterPageHandler('menu4')
                                                                                                    this.props.menu3handler(this.state.regemail, this.state.regpassword, this.state.role)}}>
                           Siguiente
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Menu3 };