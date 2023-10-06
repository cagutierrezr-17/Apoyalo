import { Component } from "react";
import "./PersonCard.css"



class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdad: this.props.edad,
        }
    }
    clickEdad = () => {
        this.setState({
            sumEdad: this.state.sumEdad + 1
        })
    }
    render() {
        let sumEdad = this.state.sumEdad;
        return (
            <div>
                <h1>{this.props.apellido}, {this.props.nombre}</h1>
                <p>Age: {sumEdad}</p>
                <p>Hair Color: {this.props.colorCabello}</p>
                <button onClick={this.clickEdad}>Birthday Button for {this.props.nombre} {this.props.apellido}</button>
            </div>
        );
    }
}

export default PersonCard;