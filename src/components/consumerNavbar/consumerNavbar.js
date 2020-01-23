import React from 'react';
import '../../global_css/colors.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './backdrop.css'
import SideDrawer from '../side_drawer/consumer_side_drawer';
import { showSidedrawer } from '../../store/actions/page';
/* import '../../images/' */
import shop from '../../images/user-icon.webp';
import './consumerNavbar.css';

function Backdrop() {
    const dispatch = useDispatch();
    return (
        <div className="backdrop-consumer" onClick={() => dispatch(showSidedrawer())}></div>
    );
}
 
function DrawerToggleButton(props) {
    const dispatch = useDispatch()
    return (
        <button className="MediumTextFont thelogbutton" onClick={() => dispatch(showSidedrawer())}>
            <img src={props.user.foto || shop} className="justify-content-end logo-size" alt="logo" ></img>
        </button>
    );
}

function Navbar() {
    const user = useSelector(state=>state.user.user)
    return (
        <div className="Navegation LandingBar">
            <div className="d-flex bd-highlight MainGradient align-items-center">
                <Link to="/">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <h3 className="text-light  text-font1 font-italic text-uppercase">
                            doky
                        </h3>
                    </button>
                </Link>
                <div className="p-2 bd-highlight"><input className="form-control mr-sm-1 d-none d-sm-block font-weight-bolder" type="search" placeholder="Buscar" aria-label="Search"></input>
                </div>
                <div className="p-2 bd-highlight"><button className=" btn btn-outline-light my-2 my-sm-0 d-none d-sm-block font-weight-bolder" type="submit">Buscar</button>
                </div>
                <div className="ml-auto p-2 bd-highlight">
                    <DrawerToggleButton user={user} />
                </div>
            </div>
        </div>
    )
}

function ConsumerNavbar() {

    const sideDrawer = useSelector(state => state.page.sideDrawer)

    return (
        <>
            <Navbar />
            <SideDrawer />
            {sideDrawer ? <Backdrop /> : null}
            <div style={{marginTop:"66px"}} ></div>
        </>
    );
}

export default ConsumerNavbar;