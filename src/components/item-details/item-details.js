import React, { Component } from 'react';
import SwapiService from '../../services/swapi';
import Spinner from '../../services/spinner';
import './item-details.css';

export const ItemRow = ({ item, field, label }) => {
    return (
        <li key={item.id} className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        isLoading: false,
        url: null
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
        const { itemId, getData, getImg } = this.props;

        if (!itemId) {
            return;
        }

        this.setState({ isLoading: true });

        getData(itemId).then(item =>
            this.setState({ item, isLoading: false, url: getImg(itemId) })
        );
    }

    render() {
        if (!this.state.item) {
            return null;
        }

        const { name, id, gender, birthYear, eyeColor } = this.state.item;
        const { item } = this.state;
        const { isLoading, url } = this.state;

        return (
            <div className="item-details card">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <img className="item-image" src={url} alt={name} />

                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                {React.Children.map(
                                    this.props.children,
                                    child => {
                                        return React.cloneElement(child, {
                                            item
                                        });
                                    }
                                )}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
