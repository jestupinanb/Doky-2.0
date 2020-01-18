import React from 'react';

/* import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css'; */
import './consumer_side_drawer.css';
import icon from "./images/navbaricon.jpg";
import { LoginController } from '../../database/controllers/login_controller';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showSidedrawer } from '../../store/actions/page';
import { LINK_PERFIL } from '../../links';

// This method is executed once the user clicks on the "shop icon".
async function logout(dispatch) {
    // We will use the log out method provided by our LoginController
    //this.loginController.logOut();
    /* console.log("LOGOUT") */
    await (new LoginController()).logOut();
    dispatch(showSidedrawer())
}
 
function SideDrawer() {
        const sideDrawer = useSelector(state => state.page.sideDrawer)
        const dispatch = useDispatch();
        
        return (
            <nav className={sideDrawer ? 'side-drawer-cons open':'side-drawer-cons'}>
                <br />
                <h1 className="textcenter BigTextFont">Funciones Consumidor</h1>
                <br />
                <img align="middle" alt="" src={icon} className="conssideimg"></img>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-12 www">
                            <Link to={LINK_PERFIL}><button className="thebuttcons WhiteColor">Perfil </button></Link>
                            <hr />
                        </div>
                        <div className="col-12 www">
                            <Link to="/Mascotas"><button className="thebuttcons WhiteColor">Mis mascotas</button></Link>
                            <hr />
                        </div>
                        <div className="col-12 www">
                            <Link to="/MisServicios"><button className="thebuttcons WhiteColor">Mis servicios</button></Link>
                            <hr />
                        </div>
                        <div className="col-12 www">
                            <Link to="/"><button onClick={() => logout(dispatch)} className="thebuttcons WhiteColor">Cerrar sesión</button></Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </nav>
        );
}

export default SideDrawer;