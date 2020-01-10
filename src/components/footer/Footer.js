import React from 'react';
import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css'; 
import firebase from '../../images/firebase.webp'
import react from '../../images/react.webp'
import instagram from '../../images/instagram.webp'
import facebook from '../../images/facebook.webp'
import linkedin from '../../images/linkedin.webp'

export default function Footer(props) {
    return (
        <div className="MainGradient mt-5 pb-3 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 textcenter mb-2">
                        <h1 className="text-light  text-font font-italic HugeTextFont mt-1"> Doky</h1>
                        <p className="TextWhiteColor">powered by:</p>
                        <div className="d-flex justify-content-center">
                            <img align="middle" alt="firebase" src={firebase} className="img-fluid mr-3" width="40px" />
                            <img align="middle" alt="react" src={react} className="img-fluid ml-3" width="40px" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 textcenter mb-2">
                        <h3 className="TextWhiteColor mb-3">Contacto</h3>
                        <div className="d-flex justify-content-center">
                            <span className="oi oi-chevron-right mt-1 mr-2" title="person" aria-hidden="true"></span>
                            <p><a className="TextWhiteColor TitleTextFont" href="https://jestupinanb.wixsite.com/doky" target="_blank" rel="noopener noreferrer"> NOSOTROS </a></p>
                        </div>
                        <h3 className="TextWhiteColor mb-3">Social</h3>
                        <div className="d-flex justify-content-center">
                            <img align="middle" alt="instagram" src={instagram} className="img-fluid mr-3" width="35px" />
                            <img align="middle" alt="facebook" src={facebook} className="img-fluid ml-3 mr-3" width="35px" />
                            <img align="middle" alt="linkedin" src={linkedin} className="img-fluid ml-3" width="35px" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 textcenter mb-2">
                        <h4 className="TextWhiteColor mb-3">Nuevas Funcionalidades</h4>
                        <div className="d-flex justify-content-center">
                            <span className="oi oi-eye mt-1 mr-2" title="person" aria-hidden="true"></span>
                            <p className="TextWhiteColor TitleTextFont">Posibilidad de acceder a tus mascotas</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="oi oi-laptop mt-1 mr-2" title="person" aria-hidden="true"></span>
                            <p className="TextWhiteColor TitleTextFont">Nueva interfaz para crear servicios</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="oi oi-wifi mt-1 mr-2" title="person" aria-hidden="true"></span>
                            <p className="TextWhiteColor TitleTextFont">Mejoras en el rendimiento de la pagina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}