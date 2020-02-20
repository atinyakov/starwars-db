import React, { Component } from 'react';

import Header from '../header';
import { Person, Planet, Starship } from '../sw-components';
import RandomPlanet from '../random-planet';
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
        this.setState({ selectedItem: id });
    };

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorBoundary>
                    <Row
                        left={
                            <Starship.List
                                itemSelected={this.itemSelected}
                                renderItem={({ name, gender }) =>
                                    `${name} / ${gender}`
                                }
                            />
                        }
                        right={
                            <Starship.Details
                                itemId={this.state.selectedItem}
                            />
                        }
                    />
                </ErrorBoundary>
            </div>
        );
    }
}
