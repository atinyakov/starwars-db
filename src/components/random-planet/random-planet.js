import './random-planet.css'
import React, { Component } from 'react';
import SwapiService from '../../services/swapi'
import Spinner from '../../services/spinner'
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.updatePlanet();
    }


    swapiService = new SwapiService;

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }


    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        // const id = 12000;


        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error)
        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content} 
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const swapiService = new SwapiService;

    const {id, name, population, rotationPeriod, diameter} = planet;
    const url = swapiService.getPictureURL(id).then(response => {
        console.log(response);
        return response;
    })

    return (
        <React.Fragment>
            <img className="planet-image" src={url} />
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
        </React.Fragment> 
    )
}