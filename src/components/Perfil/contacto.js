import React from 'react'

function Contacto(props) {
    const celular = props.celular
    const fijo = props.fijo
    const correo1 = props.correo1
    return (
        <div className="col-12 col-md-7">
            <p className="BigTextFont TextDarkMainColor d-block d-sm-none">Contacto</p>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Celular:</p>
                    <p className="SmallTextFont">{celular}</p>
                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Teléfono:</p>
                    <p className="SmallTextFont">{fijo}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Correo Principal:</p>
                    <p className="SmallTextFont">{correo1}</p>
                </div>
            </div>
        </div>
    )
}

export default Contacto