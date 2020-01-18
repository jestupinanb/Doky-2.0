import React from 'react';
import { Backdrop } from './cons_uplo_backdrop/backdropimg'
import { UploadCard } from './upload_card/upload_card';


function UploadPage(props) {
    return (
        <>
            <UploadCard
                onClickCancelar={() => props.onClickCancelar()}
                foto={props.foto}
                onClickActualizar={(img) => props.onClickActualizar(img)}
                percentageImageLoading = {props.percentageImageLoading}
            />
            <Backdrop onClickCancelar={props.onClickCancelar} />
        </>
    );
}

export default UploadPage;