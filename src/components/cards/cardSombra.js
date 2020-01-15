import React from 'react'
import './Card.css';
import {withRouter} from 'react-router-dom'

//cartas usadas en los servicios
function CardSombra(props) {
    const {history} = props
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
        <div className="div-img" >
          <img className="img" src={props.foto} title={props.titulo} alt={props.titulo}></img>
          <div className="text">
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <p>
                <button className="btn btn-outline-dark"  onClick={() => history.push(props.link)}>
                  Más información »</button>
            </p>
          </div>

        </div>
      </div>
    );
}
export default withRouter(CardSombra); 