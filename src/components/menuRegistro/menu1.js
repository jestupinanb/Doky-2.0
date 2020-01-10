import React, { Component } from 'react';

class Menu1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombres: this.props.nombres,
            apellidos: this.props.apellidos,
            fecha_nacimiento: this.props.fecha_nacimiento
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
                    <li>Contacto</li>
                    <li>Inicio Sesión</li>
                    <li>Confirmar Formulario</li>
                </ul>
                <div className="card WhiteColor" style={{ margin: '20px' }}>
                    <p className="MediumTextFont BigTextFont TextDarkMainColor">Información básica</p>
                    <form>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input type="text" name="nombres" value={this.state.nombres} onChange={this.handleChange} className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input type="text" name="apellidos" value={this.state.apellidos} onChange={this.handleChange} className="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="ultraSmallTextoFont TextGrayColor">
                        Fecha De Nacimiento
                        </div>
                        <div className="input-group mb-3 loginandregisterinput">
                            <input type="date" name="fecha_nacimiento" value={this.state.fecha_nacimiento} onChange={this.handleChange} placeholder="Nombres" className="form-control"/>
                        </div>
                    </form>
                    <div>
                        <button type="button" className="btn btn-outline-success mb-3" 
                            onClick={() => { this.props.RegisterPageHandler('menu2')
                                             this.props.menu1handler(this.state.nombres, this.state.apellidos, this.state.fecha_nacimiento)} }>Siguiente
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Menu1 };