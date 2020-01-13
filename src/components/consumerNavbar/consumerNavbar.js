import React, { Component } from 'react';
import './consumerNavbar.css';
//import '../../../../global_css/colors.css';
import { DrawerToggleButton } from './consumer_drawer_toggle_button';
import { Link } from 'react-router-dom';

class ConsumerNavbar extends Component {

    render() {
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
                        <DrawerToggleButton drawerToggleClickhandler={this.props.drawerToggleClickhandler} />
                    </div>
                </div>
            </div>

        );
    }
}

export default ConsumerNavbar;