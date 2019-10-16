import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import './app.css'


export default class App extends Component {

    state = {
        selected: null
    }

    userSelected = (id) => {
        this.setState({selected: id});
    }

    render(){
        return (
            <div>
                <Header />
                <RandomPlanet />
        
                <div className="row mb2">
                <div className="col-md-6">
                    <ItemList itemSelected = {this.userSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
                </div>
            </div>
        );
    }
};