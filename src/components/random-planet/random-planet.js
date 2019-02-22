import React, {Component} from 'react';
import Spinner from "../spinner"
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet, loading: false
    })
  }

  updatePlanet() {
    const id = this.getRandomInt(1, 10);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {

    const {planet, loading} = this.state;
    return (

        <div className="random-planet jumbotron rounded">
          {loading ?
            <Spinner/>
            :
            <PlanetView planet={planet}/>
          }
        </div>
    );
  }
}

const PlanetView = ({planet: {name, population, rotationPeriod, diameter, id}}) => (
  <>
    <img className="planet-image"
         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </>
)