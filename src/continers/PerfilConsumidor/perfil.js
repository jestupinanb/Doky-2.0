import React, { useState } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
/* import './perfil.css'; */
import interesesjson from './json/intereses.json';
import { GeneralCards } from './components_perfil/card/generalcard';
import { UserController } from '../../database/controllers/user_controller'
import user_image from './images/user-icon.webp'
import UploadPage from '../../components/upload_page/upload_page';
import InformacionBasica from '../../components/Perfil/informacion_basica'
import Contacto from '../../components/Perfil/contacto'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/actions/user';

function Perfil() {
    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.user.user)

    const [uploadimgstate, setUploadimgstate] = useState(false)
    const [percentageImageLoading, setPercentageImageLoading] = useState(0)

    const perfilImghandler = async (img) => {
        const userController = new UserController();
        userController.addImagen(
            img,
            percentage => { setPercentageImageLoading(percentage) },
            error => { console.log(error) },
            () => {
                setPercentageImageLoading(100)
                setUploadimgstate(false)
                dispatch(fetchUsers())
            }
        )
    }

    let nombre, appellido, celular, fijo, fecha_nacimiento, ciudad, barrio, correo1, fotosrc;
    let interesesname = interesesjson.nombre, interesarr = interesesjson.intereses;

    if (userInfo) {
        nombre = userInfo.nombres;
        appellido = userInfo.apellidos;
        celular = userInfo.celular;
        fijo = userInfo.telefono;
        fecha_nacimiento = userInfo.fecha;
        ciudad = userInfo.ciudad;
        barrio = userInfo.barrio;
        correo1 = userInfo.correo;
        fotosrc = userInfo.foto || user_image;
    }

    let cardlist = [];
    cardlist.push(interesarr.map((data, index) => {
        return <GeneralCards text={data} key={index} />
    }));

    let uploadPage;

    if (uploadimgstate) {
        uploadPage =
            <UploadPage
                percentageImageLoading={percentageImageLoading}
                onClickCancelar={() => { setUploadimgstate(false); setPercentageImageLoading(0) }}
                foto={fotosrc}
                onClickActualizar={(img) => { perfilImghandler(img) }}
            />
    }

    return (
        <div>
            {uploadPage}
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12">
                        <br />
                    </div>
                    <InformacionBasica
                        nombre={nombre}
                        appellido={appellido}
                        fecha_nacimiento={fecha_nacimiento}
                        ciudad={ciudad}
                        barrio={barrio}
                        fotosrc={fotosrc}
                        onClick={() => { setUploadimgstate(true); setPercentageImageLoading(0) }}
                    />
                </div>
                <div className="row">
                    <div className="col-12"><hr /></div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 d-block d-sm-none">
                        <p className="BigTextFont TextDarkMainColor">{interesesname}</p>
                    </div>
                    <div className="col-12 col-md-5 textcenter d-none d-sm-block">
                        <p className="BigTextFont TextDarkMainColor">{interesesname}</p>
                    </div>
                    <div className="col-12 col-md-7 d-none d-sm-block">
                        <p className="BigTextFont TextDarkMainColor">Contacto Laboral</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 d-block d-md-none">
                        <div className="textcenter">
                            {cardlist}
                        </div>
                    </div>
                    <div className="col-12 col-md-5 textcenter d-none d-md-block">
                        {cardlist}
                    </div>
                    <Contacto celular={celular} fijo={fijo} correo1={correo1} />
                </div>
            </div>
        </div>
    );
}

export default Perfil;