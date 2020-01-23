import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './Mascotas.css';
import foto from './foto.jpg'
import { UserController } from '../../../database/controllers/user_controller';


class RegistroMascotas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idpage: 'menu1',
            mascota: {
                nombre: null,
                fechaNacimiento: null,
                especie: null,
                raza: null,
                condicionesEspeciales: '',
                enfermedades: '',
                descipcion: '',
                rol: '',
            }

        }

    }


    Mascotascontenthandler = (param) => {
        this.setState({
            idpage: param
        });
    }

    Menucontenthandler = (param1, param2, param3, param4, param5, param6, param7) => {

        this.setState({
            mascota: {
                nombre: param1,
                fechaNacimiento: param2,
                especie: param3,
                raza: param4,
                condicionesEspeciales: param5,
                enfermedades: param6,
                descipcion: param7
            }

        });


    }
    renderSwitch(param) {
        switch (param) {
            case 'menu1':
                return <Menu1 Mascotascontenthandler={this.Mascotascontenthandler} mascota={this.state.mascota} Menucontenthandler={this.Menucontenthandler} />;
            case 'menu2':
                return <Menu2 Mascotascontenthandler={this.Mascotascontenthandler} mascota={this.state.mascota} Menucontenthandler={this.Menucontenthandler} />;
            case 'menu3':
                return <Menu3 Mascotascontenthandler={this.Mascotascontenthandler} mascota={this.state.mascota} Menucontenthandler={this.Menucontenthandler} />;
            case 'menu4':
                return <Menu4 Mascotascontenthandler={this.Mascotascontenthandler} mascota={this.state.mascota} Menucontenthandler={this.Menucontenthandler} />;

            default:
                return 'foo';
        }
    }


    render() {
        return (
            <div className="fondo ">

                <div className="container-fluid">
                    <div className="row align-items-top">
                        <div className="col-md-12 col-lg-6 " >

                            <img className="imga" src={foto} alt="Foto Mascotas"></img>

                        </div>
                        <div className="col-md-12 col-lg-6 " >
                            <h1 className="CurvyTextFontBig" style={{ marginTop: "7%" }}>Crear mascotas</h1>
                            <form id="msform">
                                {this.renderSwitch(this.state.idpage)}

                            </form>

                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default RegistroMascotas;

class Menu1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.mascota.nombre,
            fechaNacimiento: this.props.mascota.fechaNacimiento,
            especie: this.props.mascota.especie,
            raza: this.props.mascota.raza
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
                    <li className="active ">Datos Generales</li>
                    <li>Datos Específicos</li>
                    <li>Descripción</li>
                    <li>Registro exitoso</li>
                </ul>
                <fieldset>
                    <h2 className="fs-title">Crea tu mascota</h2>
                    <h3 className="fs-subtitle">Este es el paso 1</h3>

                    <input type="text" name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={this.handleChange} required />
                    <input type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento" value={this.state.fechaNacimiento} onChange={this.handleChange} required />
                    <input type="text" name="especie" placeholder="Especie" value={this.state.especie} onChange={this.handleChange} required />
                    <input type="text" name="raza" placeholder="Raza" value={this.state.raza} onChange={this.handleChange} required />
                    <button type="button" name="next" className="next action-button" value="Next" onClick={
                        () => {
                            if( this.state.especie != null &  this.state.fechaNacimiento != null & 
                                this.state.raza != null &  this.state.especie != null
                             ){
                                this.props.Menucontenthandler(this.state.nombre, this.state.fechaNacimiento, this.state.especie, this.state.raza, this.props.mascota.condicionesEspeciales, this.props.mascota.enfermedades, this.props.mascota.descipcion)
                                this.props.Mascotascontenthandler('menu2')
                            }
                        }}>
                        Siguiente</button>
                </fieldset>
            </div>
        );
    }
}

class Menu2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condicionesEspeciales: this.props.mascota.condicionesEspeciales,
            enfermedades: this.props.mascota.enfermedades,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (


            <div >
                <ul id="progressbar">

                    <li className="active">Datos Generales</li>
                    <li className="active">Datos Específicos</li>
                    <li>Descripción</li>
                    <li>Registro exitoso</li>
                </ul>
                <fieldset>
                    <h2 className="fs-title">Datos Específicos</h2>
                    <h3 className="fs-subtitle">Cuéntanos más sobre ella</h3>
                    <textarea className="form-control text" id="exampleFormControlTextarea1" rows="3" placeholder="Condiciones especiales " name="condicionesEspeciales" value={this.state.condicionesEspeciales} onChange={this.handleChange} ></textarea>
                    <textarea className="form-control text" id="exampleFormControlTextarea1" rows="3" placeholder="enfermedades" name="enfermedades" value={this.state.enfermedades} onChange={this.handleChange} ></textarea>
                    <button type="button" name="previous" className="previous action-button" value="Previous" onClick={
                        () => {
                            console.log(this.state)
                            this.props.Menucontenthandler(this.props.mascota.nombre, this.props.mascota.fechaNacimiento, this.props.mascota.especie, this.props.mascota.raza, this.state.condicionesEspeciales, this.state.enfermedades, this.props.mascota.descipcion)
                            this.props.Mascotascontenthandler('menu1')

                        }}>
                        Anterior
                        </button>
                    <button type="button" name="next" className="next action-button" value="Next" onClick={
                        () => {
                            this.props.Menucontenthandler(this.props.mascota.nombre, this.props.mascota.fechaNacimiento, this.props.mascota.especie, this.props.mascota.raza, this.state.condicionesEspeciales, this.state.enfermedades, this.props.mascota.descipcion)
                            this.props.Mascotascontenthandler('menu3')
                        }}>
                        Siguiente</button>
                </fieldset>
            </div>
        );
    }
}

class Menu3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descipcion: this.props.mascota.descipcion,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        mascotaInfo: []
    }

    agregarMascota = async (descripcion, mascota) => {
        try {
            var userController = new UserController();
            let idUser = (new UserController()).getUserId();
            const mascotaInfo = { ...mascota, ...{ descipcion: descripcion }}
            await userController.addMascota(idUser, mascotaInfo);
        } catch (error) {
            console.log(error)
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <ul id="progressbar">
                    <li className="active">Datos Generales</li>
                    <li className="active">Datos Específicos</li>
                    <li className="active">Descripción</li>
                    <li>Registro exitoso</li>
                </ul>
                <fieldset>
                    <h2 className="fs-title">Descripción</h2>
                    <h3 className="fs-subtitle">Un último paso</h3>
                    <textarea className="form-control text" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción" name="descipcion" value={this.state.descipcion} onChange={this.handleChange} ></textarea>
                    <button type="button" name="previous" className="previous action-button" value="Previous" onClick={() => {
                        this.props.Menucontenthandler(this.props.mascota.nombre, this.props.mascota.fechaNacimiento, this.props.mascota.especie, this.props.mascota.raza, this.props.mascota.condicionesEspeciales, this.props.mascota.enfermedades, this.state.descipcion)
                        this.props.Mascotascontenthandler('menu2')
                    }
                    }>
                        Anterior</button>
                    <button type="submit" name="submit" className="submit action-button" value="Submit" onClick={() => {
                        this.props.Menucontenthandler("", "", "", "", "", "", "");
                        this.props.Mascotascontenthandler('menu4');
                        this.agregarMascota(this.state.descipcion, this.props.mascota);
                    }
                    }>
                        Crear</button>
                </fieldset>
            </div>
        );
    }
}

class Menu4 extends Component {
    render() {
        return (
            <div>
                <ul id="progressbar">
                    <li className="active">Datos Generales</li>
                    <li className="active">Datos Específicos</li>
                    <li className="active">Descripción</li>
                    <li className="active">Registro exitoso</li>
                </ul>
                <fieldset>
                    <h2 className="fs-title">Registro exitoso</h2>
                    <h3 className="fs-subtitle">Su registro se ha realizado satisfactoriamente</h3>
                    <h3 className="fs-subtitle">Desea realizar un nuevo registro</h3>
                    <Link to={`/Mascotas`}><button type="button" name="previous" className="previous action-button" value="Previous">
                        Mascotas
                    </button></Link> 
                    <button type="button" name="previous" className="previous action-button" value="Previous" onClick={() => {
                        this.props.Menucontenthandler(this.props.mascota.nombre,
                            this.props.mascota.fechaNacimiento, this.props.mascota.especie,
                            this.props.mascota.raza, this.props.mascota.condicionesEspeciales,
                            this.props.mascota.enfermedades, this.props.mascota.descipcion)
                        this.props.Mascotascontenthandler('menu1')
                    }
                    }>
                        Nueva</button>
                </fieldset>
            </div>
        );
    }
}