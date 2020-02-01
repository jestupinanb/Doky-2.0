import React from 'react';
/*
import './landing_upper_bar.css'
import '../../global_css/colors.css';
*/
import { Link, useHistory } from 'react-router-dom';
import { LINK_HOME, LINK_INGRESAR, LINK_REGISTRARSE } from '../../links';
import { useState } from 'react';
import { LoginController } from '../../database/controllers/login_controller';


async function login(email, password, history) {
    try {
        const loginController = new LoginController();
        await loginController.signInWithEmailAndPassword(email, password);
        history.push(LINK_HOME)
    } catch (error) {
        // In the case that there is an error, we will log it 
        history.push(LINK_INGRESAR)
        console.log(error);
        alert(error.message);
    }
}

function LandingUpperBar() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    return (
        <div className="fixed-top">
            <div className="bd-highlight MainGradient">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <Link to={LINK_HOME} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <h1 className="text-light  text-font font-italic ">
                                Doky
                                </h1>
                        </Link>
                        <div className="ml-auto d-none d-sm-block form-inline">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="form-control mr-2 d-none d-md-inline"
                                placeholder="Correo"
                                aria-label="Correo"
                                aria-describedby="basic-addon1" />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="form-control mr-2 d-none d-md-inline"
                                placeholder="Contraseña"
                                aria-label="Contraseña"
                                aria-describedby="basic-addon1" />
                            <button type="button" className="btn btn-outline-light mr-xl-2 mr-1 font-weight-bolder d-none d-md-inline" onClick={() => login(email, password, history)}>
                                Ingresar
                            </button>
                            <Link to={LINK_INGRESAR} type="button" className="btn btn-outline-light mr-1 font-weight-bolder d-md-none">
                                Ingresar
                            </Link>
                            <Link to={LINK_REGISTRARSE} type="button" className="btn btn-outline-light mr-2 font-weight-bolder">
                                Registrarse
                            </Link>
                        </div>
                        <div className="ml-auto d-block d-sm-none">
                            <Link to={LINK_INGRESAR}>
                                <button type="button" className="btn btn-outline-light mr-2">
                                    <span className="oi oi-account-login" title="ingresar" aria-hidden="true"></span>
                                </button>
                            </Link>
                            <Link to={LINK_REGISTRARSE}>
                                <button type="button" className="btn btn-outline-light mr-2">
                                    <span className="oi oi-plus" title="crear cuenta" aria-hidden="true"></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { LandingUpperBar }; 
