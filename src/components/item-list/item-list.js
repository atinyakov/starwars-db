import React, { Component } from 'react';
import Spinner from '../../services/spinner';

import './item-list.css';

export default class ItemList extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData().then(res => {
            this.setState({ data: res });
        });
    }

    renderItems = arr => {
        return arr.map(item => {
            const { renderItem } = this.props;
            const name = renderItem(item);
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => this.props.itemSelected(item.id)}
                >
                    {name}
                </li>
            );
        });
    };

    render() {
        const { data } = this.state;

        if (!data) {
            return <Spinner />;
        }

        const dataToDisplay = this.renderItems(data);

        return <ul className="item-list list-group">{dataToDisplay}</ul>;
    }
}
