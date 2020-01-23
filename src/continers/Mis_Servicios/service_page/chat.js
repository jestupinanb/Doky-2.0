import React, { Component } from 'react';


import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';


import { ChatController } from '../../../../controllers/chat_controller'

import './misServicios.css'

class Chat extends Component {


    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
        this.mensaje = "";
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>
                this.loadChat(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    loadChat = async () => {
        try {
            let InfoSend = [];
            let id_user = this.props.id_user;
            let id_prestador = this.props.id_prestador;
            let getController = new ChatController();
            const Info = await getController.getIdChat(id_user, id_prestador);
            InfoSend.push(Info);
            this.setState({ message: InfoSend });
        } catch (error) {
            console.log(error)
        }
    }
    enviar = async (mensaje) => {
        try {
            let id_user = this.props.id_user;
            let id_prestador = this.props.id_prestador;
            console.log(id_user,"   ", id_prestador, "   ", mensaje)
            let getController = new ChatController();
            // mensaje, id_consumidor , id_prestador, id:emisor_mensaje
            // para prestador:
            //const Info = await getController.writeMesage(mensaje,id_user, id_prestador,id_prestador);
            const Info = await getController.writeMesage(mensaje, id_user, id_prestador, id_user);

        } catch (error) {
            console.log(error)
        }
    }


    chat = () => {
        let table = []
        this.state.message.map((data, index) => {
            if (data[1] != null) {
                data[1].map((data, index) => {
                    let data_esc = data.mensaje;
                    //compara para poner los colores del chat, en prestador deberia ser 
                    //if (data.userId === this.props.id_consumidor)
                    //para q se vea igual 
                    if (data.userId === this.props.id_prestador) {
                        table.push(
                            <div key={index} >

                                <p className="AltBackgroundColor leftMessage" >
                                    {data_esc}
                                </p>
                            </div>
                        );
                    } else {
                        table.push(
                            <div key={index}>
                                <p className="BackgroundColor rightMessage"  >
                                    {data_esc}
                                </p>
                            </div>
                        );
                    }
                })
            }
        })
        return table
    }



    render() {
        return (
            <>
                <div className="containerChatTotal">
                    <p className="MediumTextFont BigTextFont TextDarkMainColor" >Chat</p>
                    <div className="ContainerChat" >
                        <div data-spy="scroll WhiteColor card" data-offset="0" >

                            {this.chat()}
                        </div>

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Mensaje" name="input" aria-label="Mensaje" aria-describedby="button-addon2" ref={(c) => this.mensaje = c} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                onClick={() => {
                                    this.enviar(this.mensaje.value)
                                    this.mensaje.value = ""
                                }}>Enviar</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export { Chat }