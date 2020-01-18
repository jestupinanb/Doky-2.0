import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './generalcard.css';

class GeneralCards extends Component {

    render() {
        return (
            <div>
                <button className="generalcardbutt DarkMainColor TextWhiteColor CurvyTextFont">{this.props.text}</button>
            </div>
        );
    }
}

export { GeneralCards };