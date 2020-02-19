import React from 'react';
import Spinner from '../../services/spinner';

import './item-list.css';

export const ItemList = props => {
    const { renderItem, itemSelected, data } = props;

    const renderItems = arr => {
        return arr.map(item => {
            const name = renderItem(item);
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => itemSelected(item.id)}
                >
                    {name}
                </li>
            );
        });
    };

    if (!data) {
        return <Spinner />;
    }
    const dataToDisplay = renderItems(data);

    return <ul className="item-list list-group">{dataToDisplay}</ul>;
};

export default ItemList;
