import React, { Component } from "react";
import SwapiService from '../../services/swapi'
import Spinner from '../../services/spinner'

import './item-list.css'

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        people : null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({people: peopleList});
            });
    }
    
    renderItems = (arr) => {
        return arr.map(user => {
            return (
                <li key       = {user.id}
                    className = "list-group-item"
                    onClick   = {() => this.props.userSelected(user.id)} >
                    {user.name}
                </li>
            )
        })
    }

    render() {
        const {people} = this.state;

        if(!people) {
            return <Spinner />
        }

        const users = this.renderItems(people);
        
        return (
            <ul className="item-list list-group">
                {users}
            </ul>
        )
    }
}