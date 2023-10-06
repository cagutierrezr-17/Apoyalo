import { Component } from "react";
import "./PersonCard.css"

class PersonCard extends Component{
    render (){
        return(
            <div>
                <h1>{this.props.apellido}, {this.props.nombre}</h1>
                <p>Age: {this.props.edad}</p>
                <p>Hair Color: {this.props.colorCabello}</p>
            </div>
        );
    }
}

export default PersonCard;