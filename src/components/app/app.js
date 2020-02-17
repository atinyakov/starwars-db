import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import { ItemDetails, ItemRow } from '../item-details';
import SwapiService from '../../services/swapi';
import ErrorBoundary from '../ErrrorBoundary';
import './app.css';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">{left}</div>
            <div className="col-md-6">{right}</div>
        </div>
    );
};
export default class App extends Component {
    state = {
        selectedItem: 5
    };

    swapiService = new SwapiService();

    itemSelected = id => {
        this.setState({ itemSelected: id });
    };

    render() {
        const personList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                itemSelected={this.itemSelected}
                renderItem={({ name, gender }) => `${name} / ${gender}`}
            />
        );

        const starshipList = (
            <ItemList
                getData={this.swapiService.getAllStarships}
                itemSelected={this.itemSelected}
                renderItem={({ name, gender }) => `${name} / ${gender}`}
            />
        );

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.swapiService.getPerson}
                getImg={this.swapiService.getPersonUrl}
            >
                <ItemRow field={'eyeColor'} label={'Eye Color'} />
                <ItemRow field={'gender'} label={'Gender'} />
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.swapiService.getStarships}
                getImg={this.swapiService.getStarshipUrl}
            >
                <ItemRow field={'cargoCapacity'} label={'Cargo'} />
            </ItemDetails>
        );

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorBoundary>
                    <Row left={personDetails} right={starshipDetails} />
                </ErrorBoundary>
            </div>
        );
    }
}
