import React, { Component } from 'react';
import SwapiService from '../../services/swapi';
import Spinner from '../../services/spinner';
import './item-details.css';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        isLoading: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId } = this.props;

        if (!itemId) {
            return;
        }

        this.setState({ isLoading: true });

        this.swapiService
            .getPerson(itemId)
            .then(item => this.setState({ item, isLoading: false }));
    }

    render() {
        if (!this.state.item) {
            return null;
        }

        const { name, id, gender, birthYear, eyeColor } = this.state.item;
        const { isLoading } = this.state;

        return (
            <div className="item-details card">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <img
                            className="item-image"
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            alt={name}
                        />

                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="term">Gender</span>
                                    <span>{gender}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Birth Year</span>
                                    <span>{birthYear}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Eye Color</span>
                                    <span>{eyeColor}</span>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
