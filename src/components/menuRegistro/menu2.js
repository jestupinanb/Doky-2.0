import React from 'react';

function Menu2({setIdPage,ciudad, barrio, celular, telefono,setCiudad,setBarrio,setCelular,setTelefono }) {
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
                            value={ciudad}
                            onChange={e=>setCiudad(e.target.value)}
                            className="form-control"
                            placeholder="Ciudad" aria-label="Ciudad"
                            aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group mb-2 loginandregisterinput">
                        <input
                            type="text"
                            name="barrio"
                            value={barrio}
                            onChange={e => setBarrio(e.target.value)}
                            className="form-control"
                            placeholder="Barrio"
                            aria-label="Barrio"
                            aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group mb-2 loginandregisterinput">
                        <input
                            type="number"
                            name="celular"
                            value={celular}
                            onChange={e => setCelular(e.target.value)}
                            className="form-control"
                            placeholder="Celular"
                            aria-label="Celular"
                            aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group mb-2 loginandregisterinput">
                        <input
                            type="number"
                            name="telefono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            className="form-control"
                            placeholder="Telefono"
                            aria-label="Telefono"
                            aria-describedby="basic-addon1" />
                    </div>
                    <br />
                </form>
                <div className="mb-3">
                    <button type="button" className="btn btn-outline-success mr-1" onClick={() => setIdPage('menu1')}>
                        Anterior
                        </button>
                    <button type="button" className="btn btn-outline-success ml-1" onClick={() => setIdPage('menu3')}>
                        Siguiente
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Menu2;