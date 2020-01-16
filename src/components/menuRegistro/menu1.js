import React from 'react';

function Menu1({setIdPage,nombres,setNombres,apellidos,setApellidos,fechaDeNacimiento,setFechaDeNacimiento}){
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
                            <input type="text" name="nombres" value={nombres} onChange={e => setNombres(e.target.value)} className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"/>
                        </div>
                        <br/>
                        <div className="input-group mb-2 loginandregisterinput">
                            <input type="text" name="apellidos" value={apellidos} onChange={e => setApellidos(e.target.value) } className="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="ultraSmallTextoFont TextGrayColor">
                        Fecha De Nacimiento
                        </div>
                        <div className="input-group mb-3 loginandregisterinput">
                            <input type="date" name="setFechaDeNacimiento" value={fechaDeNacimiento} onChange={e => setFechaDeNacimiento(e.target.value) } placeholder="Nombres" className="form-control"/>
                        </div>
                    </form>
                    <div>
                        <button type="button" className="btn btn-outline-success mb-3" 
                            onClick={() => setIdPage('menu2') }>Siguiente
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default Menu1;