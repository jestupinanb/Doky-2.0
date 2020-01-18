import React, { Component } from 'react';
import './backdropimg.css'


class Backdrop extends Component {

    render() {
        return (
            <div className="backdropimg" onClick={()=>{this.props.onClickCancelar()}}></div>
        );
    }
}

export { Backdrop };