import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers/withData';
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
        const PersonList = withData(ItemList, this.swapiService.getAllPeople);

        const StarshipList = withData(
            ItemList,
            this.swapiService.getAllStarships
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
                <ItemRow field={'model'} label={'Model'} />
                <ItemRow field={'cargoCapacity'} label={'Cargo'} />
                <ItemRow field={'length'} label={'Length'} />
            </ItemDetails>
        );

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorBoundary>
                    <Row
                        left={
                            <PersonList
                                itemSelected={this.itemSelected}
                                renderItem={({ name, gender }) =>
                                    `${name} / ${gender}`
                                }
                            />
                        }
                        right={
                            <StarshipList
                                itemSelected={this.itemSelected}
                                renderItem={({ name, crew }) =>
                                    `${name} / ${crew}`
                                }
                            />
                        }
                    />
                </ErrorBoundary>
            </div>
        );
    }
}
