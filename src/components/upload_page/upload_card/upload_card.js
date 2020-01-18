import React, { Component } from 'react';
import './img_card.css';

class UploadCard extends Component {
    state = {
        imageurl: null,
        previsualization: this.props.foto,
    }

    fileselectedhandler = event => {
        const file =  event.target.files[0]
        if (file) {
            this.setState({
                imageurl: file,
                previsualization: URL.createObjectURL(file)
            });
        }
    }

    render() {
        let percentageImageLoading = this.props.percentageImageLoading;

        let uploadbar;

        if (percentageImageLoading) {
            uploadbar =
                <div className="progress" style={{ width: "100%" }}>
                    <div
                        className="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: percentageImageLoading + "%" }}
                        aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
        }

        return (
            <div className="maincard">
                <div className="card text-center">
                    <div className="card-body">
                        <h3 className="card-title">Seleccione una imagen de su ordenador</h3>
                        <br />
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="customFileLang"
                                lang="es"
                                onChange={this.fileselectedhandler}
                            />
                            <label className="custom-file-label" htmlFor="customFileLang">Seleccionar archivo</label>
                        </div>
                        <br />
                        <br />
                        <img className="uploadimg" src={this.state.previsualization} alt="" />
                        <br />
                        <br />
                        {uploadbar}
                        <br />
                        <br />
                        <button type="button" className="btn btn-outline-warning" onClick={
                            () => {
                                this.props.onClickActualizar(this.state.imageurl)
                            }
                        }>Actualizar</button>
                        <br />
                        <br />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => this.props.onClickCancelar()}
                        >Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export { UploadCard };