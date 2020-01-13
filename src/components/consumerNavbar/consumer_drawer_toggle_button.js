import React, { Component } from 'react';

/* import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css'; */
import './consumer_drawer_toggle_button.css';
import shop from './images/perro_doki.ico';
class DrawerToggleButton extends Component {

    render() {
        return (
            <button className="MediumTextFont thelogbutton" onClick={this.props.drawerToggleClickhandler}>
                <img src={shop} className="justify-content-end logo-size" alt="logo" ></img>
            </button>
        );
    }
}

export { DrawerToggleButton};