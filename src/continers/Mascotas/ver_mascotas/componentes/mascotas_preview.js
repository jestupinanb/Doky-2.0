import React from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';

import huella from './images/huella_icon.webp';

import '../mascotas.css';

export default function MascotasPrev(props) {
    return (
        <div className="scrollmascota WhiteColor" onClick={() => { props.mascotashandler(props.id) }}>
            <div className="thecardmascbut border">
                <div className="textcenter ml-md-5 mt-3 mt-sm-0">
                    <img className="huellaimg" src={huella} alt="" />
                    <h2 className='mt-1 TextDarkMainColor'>{props.nombre}</h2>
                </div>
                <div className='mt-2 mt-sm-3'>
                    <p className='mb-0 ultraSmallTextoFont TextAltMainColor'>Especie:</p>
                    <p className='mt-0 MediumTextFont'>{props.especie}</p>
                    <p className='mb-0 ultraSmallTextoFont TextAltMainColor'>Raza:</p>
                    <p className='mt-0 MediumTextFont'>{props.raza}</p>
                </div>
            </div>
        </div>
    );
}

