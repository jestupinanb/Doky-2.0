import React from 'react';
import './landingpage.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import '../../global_css/textcolors.css';
import pug from "../../images/pug.webp";
import phone from "../../images/phone.webp";
import header from "../../images/header.webp";
import mascotas from "../../images/mascotas.webp"
import guarderia from '../../images/guarderia.webp';
import paseos from '../../images/paseos.webp';
import saltos from '../../images/saltos.webp';
import veterinaria from '../../images/veterinaria.webp';
import paseosWhite from '../../images/paseosWhite.webp';
/* import veterinariaWhite from '../../images/veterinariaWhite.webp'; */
import saltosWhite from '../../images/saltosWhite.webp';
import guarderiaWhite from '../../images/guarderiaWhite.webp';
import Footer from '../../components/footer/Footer';

function Landingpage() {
    return (
        <div>
            <div className="" >
                <img src={header} alt="" style={{ height: '100vh', width: '100%' }} className=" landingheadimg" />
                <div className="container-fluid landingheadinfo">
                    <div className="row">
                        <div className="col-12 col-md-6 TextWhiteColor text-left align-items-center align-items-md-start">
                            <div className=" d-xl-none row justify-content-center" style={{ height: '100vh' }}>
                                <div className="col-8 align-self-center">
                                    <h1 className="mt-5 mb-4 HugeTextFont d-none d-sm-block">Todo lo que tu mascota necesita</h1>
                                    <p className="MediumTextFont d-none d-sm-block"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder acceder a múltiples servicios relacionados con tus mascotas.</p>
                                    <h1 className="mt-5 mb-4 MediumTextFont d-block d-sm-none">Todo lo que tu mascota necesita</h1>
                                    <p className="ultraSmallTextoFont d-block d-sm-none"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder acceder a múltiples servicios relacionados con tus mascotas.</p>
                                </div>
                            </div>

                            <div className="row d-none d-xl-flex justify-content-center">
                                <div className="col-8 align-self-center">
                                    <h1 className="mt-5 mb-4 HugeTextFont d-none d-sm-block">Todo lo que tu mascota necesita</h1>
                                    <p className="MediumTextFont d-none d-sm-block"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder acceder a múltiples servicios relacionados con tus mascotas.</p>
                                    <h1 className="mt-5 mb-4 MediumTextFont d-block d-sm-none">Todo lo que tu mascota necesita</h1>
                                    <p className="ultraSmallTextoFont d-block d-sm-none"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder acceder a múltiples servicios relacionados con tus mascotas.</p>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-8 align-self-end ">
                                    <div className="d-none d-xl-inline align-items-center">
                                        <div className="row text-center">
                                            <div className="col-6">
                                                <img align="middle" alt="Paseos" src={paseosWhite} className="img-fluid mb-3" style={{ maxWidth: "168px", maxHeight: "15vh" }} />
                                                <h1 className="mb-3">Paseos</h1>
                                            </div>
                                            <div className="col-6">
                                                <img align="middle" alt="Veterinaria" src={veterinaria} className="img-fluid mb-3" style={{ maxWidth: "168px", maxHeight: "15vh" }} />
                                                <h1 className="mb-3">Veterinarias</h1>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-6">
                                                <img align="middle" alt="Guardería" src={guarderiaWhite} className="img-fluid mb-3" style={{ maxWidth: "168px", maxHeight: "15vh" }} />
                                                <h1 className="mb-3">Guarderías</h1>
                                            </div>
                                            <div className="col-6">
                                                <img align="middle" alt="Saltos" src={saltosWhite} className="img-fluid mb-3" style={{ maxWidth: "168px", maxHeight: "15vh" }} />
                                                <h1 className="mb-3"> Saltos</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" d-none d-md-inline col-md-6 TextWhiteColor text-left">
                            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                                <div className="col-md-8" >
                                    <h1 className="mb-5 MdHugeTextFont d-none d-sm-block">Cuida de tus mascotas ofreciendole los mejores servicios cerca de tu casa.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landingpage; 