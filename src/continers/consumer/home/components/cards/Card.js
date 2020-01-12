import React, {Component} from 'react'
import './Card.css';

class Card extends Component{

    render(){ 
        return (
            <div className="col-lg-3">
              <img src={this.props.foto} alt={this.props.titulo} width="140" height="140"/>
              <h2 className= "text-font">{this.props.titulo}</h2>
              <p className= "text-font">{this.props.descripcion}</p>
              <p><a className="btn btn-outline-dark text-font" href="#" role="button">Más información »</a></p>
            </div>
        );
    }
}
export default Card;