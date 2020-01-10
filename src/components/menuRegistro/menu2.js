import React, { Component } from 'react';

class Menu2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ciudad: this.props.ciudad,
            barrio: this.props.barrio,
            celular: this.props.celular,
            telefono: this.props.telefono
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
                    <li>Inicio Sesión</li>
                    <li>Confirmar Formulario</li>
                </ul>
                <div className="card WhiteColor" style={{ margin: '20px' }}>
                    <p className="MediumTextFont BigTextFont TextDarkMainColor">Contacto</p>
                    <form>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input 
                                type="text" 
                                name="ciudad" 
                                value={this.state.ciudad} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Ciudad" aria-label="Ciudad" 
                                aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input 
                                type="text" 
                                name="barrio" 
                                value={this.state.barrio} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Barrio" 
                                aria-label="Barrio" 
                                aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input 
                                type="number" 
                                name="celular" 
                                value={this.state.celular} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Celular" 
                                aria-label="Celular" 
                                aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input 
                                type="number" 
                                name="telefono" 
                                value={this.state.telefono} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Telefono" 
                                aria-label="Telefono" 
                                aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                    </form>
                    <div className="mb-3">
                        <button type="button" className="btn btn-outline-success mr-1" onClick={() => { this.props.RegisterPageHandler('menu1') 
                                                                                                   this.props.menu2handler(this.state.ciudad, this.state.barrio, this.state.celular, this.state.telefono)}}>
                            Anterior
                        </button>
                        <button type="button" className="btn btn-outline-success ml-1" onClick={() => {  this.props.RegisterPageHandler('menu3')
                                                                                                    this.props.menu2handler(this.state.ciudad, this.state.barrio, this.state.celular, this.state.telefono)}}>
                           Siguiente
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Menu2 };