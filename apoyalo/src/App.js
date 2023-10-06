import { Component } from 'react';
import PersonCard from './Componentes/PersonCard.jsx';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <PersonCard
          nombre="Jane"
          apellido="Doe"
          edad={45}
          colorCabello="Black"></PersonCard>

        <PersonCard
          nombre="John"
          apellido="Smith"
          edad={88}
          colorCabello="Brown"></PersonCard>

        <PersonCard
          nombre="Millard"
          apellido="Fillmore"
          edad={50}
          colorCabello="Brown"></PersonCard>

        <PersonCard
          nombre="Maria"
          apellido="Smith"
          edad={62}
          colorCabello="Brown"></PersonCard>
      </div>
    );
  }
}

export default App;
