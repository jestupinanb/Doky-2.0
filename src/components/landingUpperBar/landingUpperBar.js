import React from 'react';
/*
import './landing_upper_bar.css'
import '../../global_css/colors.css';
*/
import { Link } from 'react-router-dom';
import { LINK_HOME, LINK_INGRESAR, LINK_REGISTRARSE } from '../../links';

function LandingUpperBar() {
    return (
        <div className="Navegation LandingBar">
            <div className="bd-highlight MainGradient">
                <div className="container-fluid ">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <Link to={LINK_HOME}>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <h1 className="text-light  text-font font-italic ">
                                        Doky
                                    </h1>
                                </button>
                            </Link>
                        </div>
                        <div className="ml-auto d-none d-sm-block">
                            <Link to={LINK_INGRESAR}>
                                <button type="button" className="btn btn-outline-light mr-2 font-weight-bolder">Ingresar</button>
                            </Link>
                            <Link to={LINK_REGISTRARSE}>
                                <button type="button" className="btn btn-outline-light mr-2 font-weight-bolder">Registrarse</button>
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
