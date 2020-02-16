import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi';
import './app.css';

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

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.swapiService.getAllPeople}
                            itemSelected={this.itemSelected}
                            renderItem={({ name, gender }) =>
                                `${name} / ${gender}`
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={this.state.selectedItem} />
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.swapiService.getAllStarships}
                            itemSelected={this.itemSelected}
                            renderItem={item => `${item.name} ${item.id}`}
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={this.state.selectedItem} />
                    </div>
                </div>
            </div>
        );
    }
}
