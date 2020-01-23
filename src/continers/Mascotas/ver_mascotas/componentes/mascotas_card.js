import React from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';

import pet_icon from './images/pet_icon.webp';

import './mascotascards.css';

export default function MascotasCard(props) {
    
    if(props.nombre){
        return (
            <div className="card textcenter mb-4">
                <div className="textcenter mt-4">
                    <img className="mascotaiconimg" src={pet_icon} alt="" />
                </div>
                <h1 className='TextDarkMainColor mb-2 mt-3'>{props.nombre}</h1>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Especie</p>
                <p className='MediumTextFont'>{props.especie}</p>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Raza</p>
                <p className='MediumTextFont'>{props.raza}</p>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Fecha Nacimiento</p>
                <p className='MediumTextFont'>{props.fechaNacimiento}</p>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Condiciones Especiales</p>
                <p className='MediumTextFont'>{props.condicionesEspeciales}</p>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Enfermedades</p>
                <p className='MediumTextFont'>{props.enfermedades}</p>
                <p className='ultraSmallTextoFont TextAltMainColor mb-0'>Descripción</p>
                <p className='MediumTextFont'>{props.descripcion}</p>
            </div>
        );
    }else{
        return (
            <div className="card textcenter">
                <div className="textcenter mt-5 mt-3">
                    <img className="mascotaiconimg" src={pet_icon} alt="" />
                </div>
                <h1 className="mt-5 mb-5 text-muted">Usted Actualmente no tiene ninguna mascota creada.</h1>
            </div>
        );
    }
    
}
