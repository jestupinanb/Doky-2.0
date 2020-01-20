import React, { useState } from 'react';
/*
import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css'; 
*/
import './loginPage.css';
import background from "../../images/background.webp";
import user_icon from "../../images/user-icon.webp";

import { LoginController } from '../../database/controllers/login_controller';
import { useHistory } from 'react-router-dom';
import { LINK_HOME } from '../../links';


function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    // This method will happen once the user clicks on "INGRESAR"
    const login = async (event) => {
        try {
            // We prevent the default cases so avoid submitting the form
            event.preventDefault();
            // Here we will use the method in the controller for signing in
            // That method will be the responsible for start a session into the browser's cookies,
            // so we don't need any more for checking if the auth was successful
            const loginController = new LoginController()
            await loginController.signInWithEmailAndPassword(email, password);
            history.push(LINK_HOME)
        } catch (error) {
            // In the case that there is an error, we will log it 
            console.log(error);
            alert(error.message);
        }
    }

    // TODO: There is a bug when you put the incorrect password but the email is correct, then when you
    // put your password again, and it is the correct, the app keeps taking an incorrect password.
    // NOTE: I just notice that the session is opened, but you have to press F5.
    // To be honest I don't understand very good when the bug happens =(
    return (
        <div>
            <img src={background} id="bg" alt="" />
            <div className="container" style={{ zIndex: 20 }}>
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-3" style={{ textAlign: 'center' }}>
                        <div className="card pt-1" style={{ background: 'rgba(255, 255, 255, 0.7)', margin: '10% 0 0 0' }}>
                            <h1>Iniciar Sesión</h1>
                            <img className="usericonimg" src={user_icon} alt="" />
                            <div className="card WhiteColor" style={{ margin: '20px' }}>
                                <br />
                                <form>
                                    <h6>USUARIO:</h6>
                                    <div className="input-group mb-3 loginandregisterinput">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">
                                                <span className="oi oi-person" title="person" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
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
                                            name="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Contraseña"
                                            aria-label="Contraseña"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="button" className="btn btn-outline-success mb-3" onClick={event => login(event)}>
                                        INGRESAR
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LoginPage };

