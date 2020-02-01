import React from 'react';

import img from '../../images/paseos.webp'
import { LINK_HOME, LINK_ABOUT } from '../../links';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="container-fluid" style={{ width: "100%" }}>
                <div className="row text-center justify-content-center  align-items-center" style={{ height: "90vh" }} >
                    <div className="col">
                        <h2>Esta pagina no esta disponible</h2>
                        <h5>Por favor verifica que el link es correcto.</h5>
                        <img className="img-fluid" src={img} alt="NotFound" />
                        <br />
                        <Link to={LINK_HOME} >Home</Link>
                        <span> </span>
                        <Link to={LINK_ABOUT} >About</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound;