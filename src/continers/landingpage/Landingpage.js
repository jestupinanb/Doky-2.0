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
import veterinaria from '../../images/veterinaria.webp';
import saltos from '../../images/saltos.webp';
import Footer from '../../components/footer/Footer';

function Landingpage(){
        return (
            <div>
                <div className="landingheadcont" style={{ height: '100vh', width: '100%' }}>
                    <img src={header} alt="" style={{ height: '100vh', width: '100%' }} className="landingheadimg" />
                    <div className="container landingheadinfo">
                        <div className="row text-center align-items-center justify-content-center">
                            <div className="col-12 col-md-6 TextWhiteColor">
                                <h1 className="mb-5 HugeTextFont d-none d-sm-block">Todo lo que tu mascota necesita</h1>
                                <p className="MediumTextFont d-none d-sm-block"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder como persona natural acceder a múltiples servicios relacionados con las macotas, podrás acceder desde servicios de paseadores de perros, hasta a las mejores guarderías y veterinarias del país. Así mismo si tu deseas que tu negocio prospere como única lo ha hecho, nuestra sección de prestadores es lo que estabas buscando.</p>
                                <h1 className="mb-5 MediumTextFont d-block d-sm-none">Todo lo que tu mascota necesita</h1>
                                <p className="ultraSmallTextoFont d-block d-sm-none"><strong>Doky</strong> es la nueva plataforma web que te permitirá poder como persona natural acceder a múltiples servicios relacionados con las macotas, podrás acceder desde servicios de paseadores de perros, hasta a las mejores guarderías y veterinarias del país. Así mismo si tu deseas que tu negocio prospere como única lo ha hecho, nuestra sección de prestadores es lo que estabas buscando.</p>
                            </div>
                            <div className="col-12 col-md-6 TextWhiteColor textcenter">
                                <img className="d-inline d-md-none" alt="Mascotas" title="Mascotas" src={mascotas} width="200px"></img>
                                <img className="d-none d-md-inline d-lg-none" alt="Mascotas" title="Mascotas" src={mascotas} width="300px"></img>
                                <img className="d-none d-lg-inline d-xl-none" alt="Mascotas" title="Mascotas" src={mascotas} width="400px"></img>
                                <img className="d-none d-xl-inline" alt="Mascotas" title="Mascotas" src={mascotas} width="500px"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="row WhiteColor border align-items-center p-3">
                        <div className="col-sm-12 col-lg-2 textcenter">
                            <img alt="El PUG" title="El PUG" src={pug} width="80px"></img>
                        </div>
                        <div className="col-sm-12 col-lg-10">
                            <h4 style={{ fontSize: 20, textAlign: "center" }}><strong>Doky</strong> está separada en dos, ya que manejamos cuentas independientes para los usuarios prestadores y consumidores, con el fin de que la aplicación siempre tenga el mejor rendimiento.</h4>
                        </div>
                    </div>
                    <div className="row WhiteColor border p-3 mt-5 align-items-center">
                        <div className="col-sm-12 col-lg-2 textcenter">
                            <img alt="El PUG" title="telefono" src={phone} width="80px"></img>
                        </div>
                        <div className="col-sm-12 col-lg-10">
                            <h4 style={{ fontSize: 20, textAlign: "center" }}><strong>Doky</strong> esta diseñada para que la puedas utilizar desde cualquier equipo de escritorio, y desde cualquier dispositivo móvil.</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-sm-6 col-md-2 textcenter">
                            <img align="middle" alt="Paseos" src={paseos} className="img-fluid mb-3" />
                            <h1 className="mb-3">Paseos</h1>
                            <p>Con el servicio de PASEOS de Doky ahora todos podrán contactarte desde nuestro portal para encontrar paseadores.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-2 textcenter">
                            <img align="middle" alt="Veterinaria" src={veterinaria} className="img-fluid mb-3" />
                            <h1 className="mb-3">Veterinaria</h1>
                            <p>Con el servicio de VETERIANRIA de Doky puedes lograr que millones de usuarios encuentren tu veterinaria en siempre.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-2 textcenter">
                            <img align="middle" alt="Guardería" src={guarderia} className="img-fluid mb-3" />
                            <h1 className="mb-3">Guardería</h1>
                            <p>Con el servicio de GUARDERÍA de Doky puedes lograr que millones de usuarios encuentren tu guardería en todo momento.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-2 textcenter">
                            <img align="middle" alt="Saltos" src={saltos} className="img-fluid mb-3" />
                            <h1 className="mb-3">Saltos</h1>
                            <p>Con el servicio de SALTOS de Doky ahora puede publicar la venta de la genética de tu animal mas valioso a todo el público.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default Landingpage; 